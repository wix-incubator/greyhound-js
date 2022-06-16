const factory = require("./greyhound_service_grpc_client"),
  client = factory.getClient(),
  {GroupTopicPair} = require("./group_topic_pair");

const GREYHOUND_CONSUMER_SERVER_HOST = "0.0.0.0",
  GREYHOUND_CONSUMER_SERVER_PORT = "9092";

class Consumer {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.registry = new Map();
  }

  registerCallback() {
  }
  
  
}
function register(callback) {
  
}

function startConsuming(...consumers) {
  
}

module.exports = {};
