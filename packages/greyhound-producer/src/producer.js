const {Topic} = require("../../topics");
const prettylog = require("../../console/log")
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../proto/greyhoundsidecar.proto`;
const GREYHOUND_SIDECAR_IP = "0.0.0.0";
const GREYHOUND_SIDECAR_PORT = "8080";

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {keepCase: true,
  longs: String,
  enums: String,
  defaults: true,oneofs: true});
const greyhoundsidecarProto = grpc.loadPackageDefinition(packageDefinition);
const client = new greyhoundsidecarProto.GreyhoundSidecar(`${GREYHOUND_SIDECAR_IP}:${GREYHOUND_SIDECAR_PORT}`, grpc.credentials.createInsecure());

function produce(topicName, payload, target, headers) {
  // TODO: add validation
  // TODO: support target as union
  client.produce({topic: topicName, payload: payload ? {value: payload} : null, target, headers});
  prettylog.log(`Produced a message to Greyhound: {"topicName": "${topicName}"}`);
}

function createTopic(topic) {
  createTopics([topic]);
}

function createTopics(topics) {
  // TODO: add validation
  client.createTopics(...(topics.map(topic => {return {name: topic.name, partitions: topic.numOfPartitions ? {value: topic.numOfPartitions} : null};})));
  prettylog.log(`Requested topic creation: ${JSON.stringify(topics)}`);
}

module.exports = {Topic, produce, createTopic, createTopics};
