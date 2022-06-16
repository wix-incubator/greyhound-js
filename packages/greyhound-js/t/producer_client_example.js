const {NewTopic, producer}  = require("../src");

const topicName = "dummy";

producer.createTopic(new NewTopic(topicName, 8));

producer.produce(topicName, "{}", {key: "dummy"}, null);
