class NewTopic {
  constructor(name, numberOfPartitions) {
    this.name = name;
    this.numberOfPartitions = numberOfPartitions;
  }
}

class GroupAndTopic {
  constructor(group, topic) {
    this.group = group;
    this.topic = topic;
  }
}

function validateGroupAndTopic(pair) {
  if (!pair || !(pair instanceof pair) || !(pair.group) || !(pair.topic))
    throw new Error("Illegal argument");
}

module.exports = {NewTopic, GroupAndTopic, validateGroupAndTopic};
