function start(host, port) {
    const grpc = require('@grpc/grpc-js'),
      protoLoader = require('@grpc/proto-loader'),
      PROTO_PATH = `${__dirname}/../protos/consumer.proto`,
      SERVICE_IP = "0.0.0.0",
      SERVICE_PORT = "50051";

  const loaded_proto = protoLoader.loadSync(
    PROTO_PATH,
      {keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true});
  const package_def = grpc.loadPackageDefinition(loaded_proto);
  const consumer_proto = package_def.gh.consumer;

  const server = new grpc.Server();
  server.addService(consumer_proto.Consumer.service, {accept});
  server.bindAsync(`${SERVICE_IP}:${SERVICE_PORT}`, grpc.ServerCredentials.createInsecure(), () => {
      server.start();
      info(`gRPC server started at ${SERVICE_IP}:${SERVICE_PORT}`);

      // register to Greyhound sidecar
      register_gh();
      info(`Registered to Greyhound sidecar as consumer`);
  });
}

module.exports = {start};
