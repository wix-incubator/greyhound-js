const {NewTopic, Producer, Consumer, GroupAndTopic}  = require("../src");

const topicName = "dummy";

const consumer = new Consumer();
try {
  consumer.startConsuming(new GroupAndTopic("new", topicName));
    
  const producer = new Producer();
    
  producer.createTopic(new NewTopic(topicName, 8));
    
  producer.produce(topicName, "{}", {key: "dummy"}, null);    
} finally {
    consumer.close();
}
// TODO: handle the fact that the node process is not terminated so the build is hang
