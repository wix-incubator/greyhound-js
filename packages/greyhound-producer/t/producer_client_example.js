const {Topic, producer}  = require("../../greyhound-producer");

const topicName = "dummy";

producer.createTopic(new Topic(topicName, 8));

producer.produce(topicName, "{}", {key: "dummy"}, null);
