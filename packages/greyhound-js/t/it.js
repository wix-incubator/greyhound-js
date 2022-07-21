const {NewTopic, Producer, Consumer, GroupAndTopic}  = require("../src");

const topicName = "dummy";
const ghPort = 64417;

const consumer = new Consumer("localhost", ghPort);
try {
  consumer.startConsuming(new GroupAndTopic("new", topicName));
    
  const producer = new Producer("localhost", ghPort);
    
  producer.createTopic(new NewTopic(topicName, 8));
    
  producer.produce(topicName, "{}", {key: "dummy"}, null);    
} finally {
    consumer.shutdown();
}
