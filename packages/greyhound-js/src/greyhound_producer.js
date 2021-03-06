const {NewTopic} = require("./topics.js"),
  factory = require("./greyhound_client_factory.js"),
  messages = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_pb.js");

class Producer {
  constructor(ghHost, ghPort) {
    this.ghHost = ghHost;
    this.ghPort = ghPort;
    this.client = factory.getClient(ghHost, ghPort);
  }

  produce(topicName, payload, target, headers) {
    const request = new messages.ProduceRequest();
    
    request.setTopic(topicName);
    // request.setPayload(payload ? payload : null);
    // request.setTarget(target);
    // request.customHeadersMap = ;

    this.client.produce(request, (err, response) => {
      if (err && err.code && err.details)
        console.log(`Error trying to produce: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`Produced a message to Greyhound`);
    });
  }
  
  createTopic(topic) {
    this.createTopics(topic);
  }
  
  createTopics(...topics) {
    const request = new messages.CreateTopicsRequest();
    
    request.setTopicsList(topics.map(topic => {
      const topicToCreate = new messages.TopicToCreate();

      topicToCreate.setName(topic.name);
      // topicToCreate.setPartitions(1);
      // topicToCreate.setPartitions(topic.numberOfPartitions ? topic.numberOfPartitions : null);
      
      return topicToCreate;
    }));

    this.client.createTopics(request, (err, response) => {
      if (err && err.code && err.details)
        console.log(`Error creating topics: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`Requested topics creation: ${JSON.stringify(topics.map(topic => topic.name))}`);
    });
  }
}

module.exports = {NewTopic, Producer};
