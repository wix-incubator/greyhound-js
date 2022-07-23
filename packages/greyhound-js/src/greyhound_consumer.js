const factory = require("./greyhound_client_factory"),
  messages = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecaruser_pb.js"),
  services = require("../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecaruser_grpc_pb.js"),
  grpc = require('@grpc/grpc-js');

class GroupAndTopic {
  constructor(group, topic) {
    this.group = group;
    this.topic = topic;
  }
}

function validateGroupAndTopic(groupAndTopic) {
  if (!groupAndTopic || !(groupAndTopic instanceof GroupAndTopic) || 
    !(groupAndTopic.group) || !(groupAndTopic.group instanceof String) || 
    !(groupAndTopic.topic) || !(groupAndTopic.group instanceof String))
    throw new Error("Illegal group and topic");
}

function validateIsFunction(fn) {
  if (!fn || !(fn instanceof Function))
    throw new Error("Illegal argument");
}

class GreyhoundRegistry {
  constructor() {
    this._registry = new Map();
  }

  register(groupAndTopic, callback) {
    validateGroupAndTopic(groupAndTopic);
    validateIsFunction(callback);    
    
    if (!this._registry.has())
      this._registry.set(groupAndTopic, []);
    this._registry.get(groupAndTopic).push(callback);
  }
  
  unregister(groupAndTopic, callback) {
    validateGroupAndTopic(groupAndTopic);
    validateIsFunction(callback);    
    
    const callbacks = this._registry.get(groupAndTopic);
    if (callbacks) {
      const filtered = callbacks.filter(cb => cb != callback);
      if (callbacks.length < 1)
        this._registry.delete(groupAndTopic);
      else
        this._registry.set(groupAndTopic, filtered);
    }
  }
}

class Consumer {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this._client = factory.getClient(host, port);
    this._host = "localhost";
    this._port = "8080";
    this._registry = new GreyhoundRegistry();
    this._registered = false;
    this._server = null;
  }

  register(groupAndTopic, callback) {
    this._registry.register(groupAndTopic, callback);
  }
  
  unregister(groupAndTopic, callback) {
    this._registry.unregister(groupAndTopic, callback);
  }
  
  startConsuming(...groupAndTopics) {
    if (!this._registered) {
      this._server = new grpc.Server();
      this._server.addService(services.GreyhoundSidecarUserService, {handleMessages});

      new Promise((resolve, reject) => {
        this._server.bindAsync(`${this._host}:${this._port}`, grpc.ServerCredentials.createInsecure(), () => {
          this._server.start();
          console.log("started consumer server");
          resolve();
        });
      })
      .then(() => {return register(this)})
      .then(() => {return doStartConsuming(this, groupAndTopics)});
    } else
      doStartConsuming(this, groupAndTopics);
  }

  close() {
    this._server.forceShutdown();
  }
}

function handleMessages(call, callback) {
  const request = call.request;

  // TODO: consumer dispatcher dispatch()
  console.log(`handling message from Geryhound: ${JSON.stringify(request)}`);  

  callback(null, new messages.HandleMessagesResponse());
}

function register(consumer) {
  const request = new messages.RegisterRequest();
  request.setHost(consumer._host);
  request.setPort(consumer._port);

  return new Promise((resolve, reject) => {
    consumer._client.register(request, (err, response) => {
      if (err && err.code && err.details)
        console.error(`error: couldn't register to Greyhound: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`registered to Greyhound`);
      resolve();
  })});
}

function doStartConsuming(consumer, groupAndTopics) {
  const request = new messages.StartConsumingRequest();
  request.setConsumersList(groupAndTopics.map(pair => {
    const consumer = new messages.Consumer();
    consumer.setGroup(pair.group);
    consumer.setTopic(pair.topic);
    return consumer;
  }));

  return new Promise((resolve, reject) => {
    consumer._client.startConsuming(request, (err, response) => {
      if (err && err.code && err.details)
        console.error(`error: couldn't start consuming: {"code": ${err.code}, "details": "${err.details}"}`);
      else
        console.log(`started consuming`);
      resolve();
    }); 
  });
}

module.exports = {Consumer, GroupAndTopic};
