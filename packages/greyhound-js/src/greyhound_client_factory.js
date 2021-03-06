const grpc = require('@grpc/grpc-js'),
  services = require('../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_grpc_pb');
  
let client = null;
function getClient(host, port) {
  if (!client) {
    console.log(`Creating client of Greyhound process which is running at ${host}:${port}`)
    client = new services.GreyhoundSidecarClient(`${host}:${port}`, grpc.credentials.createInsecure());
  }
  return client;
}

module.exports = {getClient};
