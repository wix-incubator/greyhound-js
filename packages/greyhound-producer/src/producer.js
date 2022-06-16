const {Topic} = require("../../topics");
const prettylog = require("../../console/log")
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../proto/greyhoundsidecar.proto`;
const GREYHOUND_IP = "0.0.0.0";
const GREYHOUND_PORT = "8080";

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true});
// console.log(JSON.stringify(packageDefinition));
const greyhoundsidecarProto = grpc.loadPackageDefinition(packageDefinition).com.wixpress.dst.greyhound.sidecar.api.v1;
console.log(JSON.stringify(greyhoundsidecarProto));
// console.log(">>> " + greyhoundsidecarProto.GreyhoundSidecar);
const client = new greyhoundsidecarProto.GreyhoundSidecar(`${GREYHOUND_IP}:${GREYHOUND_PORT}`, grpc.credentials.createInsecure());

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
