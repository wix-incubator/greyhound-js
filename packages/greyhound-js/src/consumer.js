const factory = require("./greyhound_client_factory"),
  {GroupTopicPair, validateGroupTopicPairArg} = require("./group_topic_pair"),
  messages = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecaruser_pb.js"),
  services = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecaruser_grpc_pb.js"),
  grpc = require('@grpc/grpc-js');

class Consumer {
  constructor(ghHost, ghPort) {
    this.ghHost = ghHost;
    this.ghPort = ghPort;
    this.consumerHost = "localhost";
    this.consumerPort = 8080;
    this.registry = new Map();
    this.registeredToGreyhound = false;
    this.client = factory.getClient(ghHost, ghPort);
    this.server = null;
  }

  subscribe(groupTopicPair, callback) {
    validateGroupTopicPairArg(groupTopicPair);
    validateIsFunction(callback);    
    
    if (!this.registry.has())
      this.registry.set(groupTopicPair, []);
    this.registry.get(groupTopicPair).push(callback);
  }
  
  unsubscribe(groupTopicPair, callback) {
    validateGroupTopicPairArg(groupTopicPair);
    validateIsFunction(callback);    
    
    const cbs = this.registry.get(groupTopicPair);
    if (cbs) {
      const filtered = cbs.filter(cb => cb != callback);
      if (cbs.length < 1)
        this.registry.delete(groupTopicPair);
      else
        this.registry.set(groupTopicPair, filtered);
    }
  }
  
  startConsuming(...groupTopicPairs) {
    if (!this.registeredToGreyhound) {
      this.server = new grpc.Server();
      this.server.addService(services.GreyhoundSidecarUserService, {handleMessages});

      new Promise((resolve, reject) => {
        this.server.bindAsync(`${this.consumerHost}:${this.consumerPort}`, grpc.ServerCredentials.createInsecure(), () => {
          this.server.start();
          console.log("Started consumer server");
          resolve();
        });
      })
      .then(() => {return registerToGreyhound(this)})
      .then(() => {return callStartConsuming(this, groupTopicPairs)});
    } else
      callStartConsuming(this, groupTopicPairs);
  }

  shutdown() {
    this.server.forceShutdown();
  }
}

function validateIsFunction(fn) {
  if (!fn || !(fn instanceof Function))
    throw new Error("Illegal argument");
}

function handleMessages(call, callback) {
  const request = call.request;

  // TODO: consumer dispatcher dispatch()
  console.log(`Handling message from Geryhound: ${JSON.stringify(request)}`);  

  callback(null, new messages.HandleMessagesResponse());
}

function registerToGreyhound(consumer) {
  const request = new messages.RegisterRequest();
    
  request.setHost(consumer.consumerHost);
  request.setPort(consumer.consumerPort);

  return new Promise((resolve, reject) => {
    consumer.client.register(request, (err, response) => {
      if (err && err.code && err.details)
        console.log(`Error trying to register to Greyhound: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`Registered to Greyhound`);
      resolve();
  })});
}

function callStartConsuming(consumer, groupTopicPairs) {
  const request = new messages.StartConsumingRequest();
  
  request.setConsumersList(groupTopicPairs.map(pair => {
    const consumer = new messages.Consumer();
    consumer.setGroup(pair.group);
    consumer.setTopic(pair.topic);
    return consumer;
  }));

  return new Promise((resolve, reject) => {
    consumer.client.startConsuming(request, (err, response) => {
      if (err && err.code && err.details)
        console.log(`Error trying to start consuming: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`Started consuming`);
      resolve();
    }); 
  });
}

module.exports = {Consumer, GroupTopicPair};
