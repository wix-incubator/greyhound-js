const factory = require("./greyhound_client_factory.js"),
  messages = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_pb.js");

class NewTopic {
  constructor(name, numberOfPartitions) {
    this.name = name;
    this.numberOfPartitions = numberOfPartitions;
  }
}

function validateNewTopic(newTopic) {
  if (!newTopic || !(newTopic instanceof NewTopic) || 
    !(newTopic.name) || !(newTopic.name instanceof String) || 
    !(newTopic.numberOfPartitions) || !(newTopic.numberOfPartitions instanceof Number) || 0 >= newTopic.numberOfPartitions)
    throw new Error("Illegal new topic");
}

class Producer {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.client = factory.getClient(host, port);
  }

  produce(topicName, payload, target, headers) {
    if (!(topicName) || !(topicName instanceof String))
      throw new Error("Illegal topic name");
    if (payload ? !(payload instanceof String) : null !== payloadpayload && undefined !== payload && "" !== payload) // TODO: validate that non falsy payload is json
      throw new Error("Illegal payload");
    // TODO: validate target
    if (headers ? !(payload instanceof Map) : null !== payloadpayload && undefined !== payload)
      throw new Error("Illegal headers");

    const request = new messages.ProduceRequest();
    request.setTopic(topicName);
    // request.setPayload(payload ? payload : null);
    // request.setTarget(target);
    // request.customHeadersMap = ;

    this.client.produce(request, (err, response) => {
      if (err && err.code && err.details)
        console.log(`error: couldn't produce: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`Produced a message to Greyhound`);
    });
  }
  
  createTopic(newTopic) {
    this.createTopics(newTopic);
  }
  
  createTopics(...newTopics) {
    const request = new messages.CreateTopicsRequest();
    request.setTopicsList(newTopics.map(topic => {
      validateNewTopic(topic);

      const topicToCreate = new messages.TopicToCreate();
      topicToCreate.setName(topic.name);
      // topicToCreate.setPartitions(1);
      // topicToCreate.setPartitions(1 > numberOfPartitions ? 1 : Math.round(numberOfPartitions));
      return topicToCreate;
    }));

    this.client.createTopics(request, (err, response) => {
      if (err && err.code && err.details)
        console.log(`error: Couldn't create topics: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`Requested topics creation: ${JSON.stringify(topics.map(topic => topic.name))}`);
    });
  }
}

module.exports = {NewTopic, Producer};
