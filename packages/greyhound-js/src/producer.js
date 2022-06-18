const {NewTopic} = require("./new_topic.js"),
  factory = require("./greyhound_client_factory.js"),
  config = require("./greyhound_default_config.js"),
  messages = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_pb.js");

class Producer {
  constructor(host, port) {
    this.host = host ? host : config.GREYHOUND_HOST;
    this.port = port ? port : config.GREYHOUND_PORT;
    this.client = factory.getClient(port, host);
  }

  produce(topicName, payload, target, headers) {
    const request = new messages.ProduceRequest();
    request.setTopic(topicName);
    request.setPayload(payload ? payload : null);
    request.setTarget(target);
    // request.customHeadersMap = ;
    this.client.produce(request);
    console.log(`Produced a message to Greyhound: {"topicName": "${topicName}"}`);
  }
  
  createTopic(topic) {
    this.createTopics(topic);
  }
  
  createTopics(...topics) {
    const request = new messages.CreateTopicsRequest();
    request.setTopicsList(topics.map(topic => {return {name: topic.name, partitions: topic.numberOfPartitions ? topic.numberOfPartitions : null};}));
    this.client.createTopics(request);
    console.log(`Requested topic creation: ${JSON.stringify(topics)}`);
  }
}

module.exports = {NewTopic, Producer};
