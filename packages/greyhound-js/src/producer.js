const {NewTopic} = require("./new_topic.js"),
  factory = require("./greyhound_client_factory.js"),
  config = require("./greyhound_default_config.js");

class Producer {
  constructor(host, port) {
    this.host = host ? host : config.GREYHOUND_HOST;
    this.port = port ? port : config.GREYHOUND_PORT;
    this.client = factory.getClient(port, host);
  }

  produce(topicName, payload, target, headers) {
    client.produce({topic: topicName, payload: payload ? {value: payload} : null, target, headers});
    console.log(`Produced a message to Greyhound: {"topicName": "${topicName}"}`);
  }
  
  createTopic(topic) {
    this.createTopics(topic);
  }
  
  createTopics(...topics) {
    client.createTopics(...(topics.map(topic => {return {name: topic.name, partitions: topic.numOfPartitions ? {value: topic.numOfPartitions} : null};})));
    console.log(`Requested topic creation: ${JSON.stringify(topics)}`);
  }
}

module.exports = {NewTopic, Producer};
