const grpc = require('@grpc/grpc-js'),
  services = require('../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_grpc_pb');

// TODO: support file based config here and in consumer
const host = process.env.GHHOST ? process.env.GHHOST : "localhost",
  port = process.env.GHPORT ? process.env.GHPORT : "3735";

let client = null;
function getClient() {
  if (null === client) {
    console.log(`creating client of Greyhound process which is running at ${host}:${port}`)
    client = new services.GreyhoundSidecarClient(`${host}:${port}`, grpc.credentials.createInsecure());
  }
  return client;
}

module.exports = {getClient};
