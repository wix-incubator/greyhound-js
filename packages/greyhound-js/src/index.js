const {Producer, NewTopic} = require("./greyhound_producer.js"),
  {Consumer, GroupAndTopic} = require("./greyhound_consumer");
module.exports = {Producer, NewTopic, Consumer, GroupAndTopic};

// TODO: consider multithreading
