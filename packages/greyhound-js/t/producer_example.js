const {NewTopic, Producer}  = require("../src");

const topicName = "dummy";
const producer = new Producer();

producer.createTopic(new NewTopic(topicName, 8));
producer.produce(topicName, "{}", {key: "dummy"}, null);
