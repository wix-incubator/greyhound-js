const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../proto/greyhoundsidecar.proto`;
const config = require("./config");

function getClient() {
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
  const client = new greyhoundsidecarProto.GreyhoundSidecar(`${config.GREYHOUND_HOST}:${config.GREYHOUND_PORT}`, grpc.credentials.createInsecure());  
  return client;
}

module.exports = {getClient};
