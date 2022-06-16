const factory = require("./greyhound_service_grpc_client");
const client = factory.getClient();

class Producer {
  produce(topicName, payload, target, headers) {
    client.produce({topic: topicName, payload: payload ? {value: payload} : null, target, headers});
    console.log(`Produced a message to Greyhound: {"topicName": "${topicName}"}`);
  }
  
  createTopic(topic) {
    createTopics(topic);
  }
  
  createTopics(...topics) {
    client.createTopics(...(topics.map(topic => {return {name: topic.name, partitions: topic.numOfPartitions ? {value: topic.numOfPartitions} : null};})));
    console.log(`Requested topic creation: ${JSON.stringify(topics)}`);
  }
}

module.exports = {NewTopic, Producer};
