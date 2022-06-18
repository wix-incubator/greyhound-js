const grpc = require('@grpc/grpc-js');
const services = require('../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_grpc_pb');
  
function getClient(host, port) {
  return client = new services.GreyhoundSidecarClient(`${host}:${port}`, grpc.credentials.createInsecure());
}

module.exports = {getClient};
