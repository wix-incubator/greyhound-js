class NewTopic {
  constructor(name, numberOfPartitions) {
    // TODO: add validation
    this.name = name;
    this.numberOfPartitions = numberOfPartitions;
  }
}

module.exports = {NewTopic};
