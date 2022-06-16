const grpc = require('@grpc/grpc-js'),
  protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar.proto`;

function getClient(host, port) {
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
  return new greyhoundsidecarProto.GreyhoundSidecar(`${host}:${port}`, grpc.credentials.createInsecure());  
}

module.exports = {getClient};
