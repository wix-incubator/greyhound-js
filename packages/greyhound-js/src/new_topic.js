class NewTopic {
  constructor(name, numberOfPartitions) {
    if (!name || !(name instanceof String))
      throw new Error("Illegal name");
    if (!numberOfPartitions || !(name instanceof Number) || 0 >= numberOfPartitions)
      throw new Error("Illegal number of partitions");
    
    this.name = name;
    this.numberOfPartitions = 1 > numberOfPartitions ? 1 : Math.round(numberOfPartitions);
  }
}

module.exports = {NewTopic};
