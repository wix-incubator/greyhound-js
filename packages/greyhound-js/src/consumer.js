const factory = require("./greyhound_client_factory"),
  client = factory.getClient(),
  {GroupTopicPair} = require("./group_topic_pair");

class Consumer {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.registry = new Map();
    this.registeredToGreyhound = false;
  }

  subscribe(groupTopicPair, callback) {

  }
  
  unsubscribe(groupTopicPair, callback) {

  }
  
  startConsuming(...consumers) {
    
  }

  dispose() {

  }
}

module.exports = {};
