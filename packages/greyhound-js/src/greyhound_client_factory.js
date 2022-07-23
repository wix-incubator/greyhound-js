const grpc = require('@grpc/grpc-js'),
  services = require('../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_grpc_pb');
  
let client = null;
function getClient() {
  if (null === client) {
    console.log(`creating client of Greyhound process which is running at ${process.env.GREYHOUNDHOST}:${process.env.GREYHOUNDPORT}`)
    client = new services.GreyhoundSidecarClient(`${process.env.GREYHOUNDHOST}:${process.env.GREYHOUNDPORT}`, grpc.credentials.createInsecure());
  }
  return client;
}

module.exports = {getClient};
