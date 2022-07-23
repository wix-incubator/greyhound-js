const grpc = require('@grpc/grpc-js'),
  services = require('../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_grpc_pb');

const host = process.env.GREYHOUNDHOST ? process.env.GREYHOUNDHOST : "localhost",
  port = process.env.GREYHOUNDPORT ? process.env.GREYHOUNDPORT : "3735";

let client = null;
function getClient() {
  if (null === client) {
    console.log(`creating client of Greyhound process which is running at ${host}:${port}`)
    client = new services.GreyhoundSidecarClient(`${host}:${port}`, grpc.credentials.createInsecure());
  }
  return client;
}

module.exports = {getClient};
