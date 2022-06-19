class GroupTopicPair {
  constructor(group, topic) {
    this.group = group;
    this.topic = topic;
  }
}

function validateGroupTopicPairArg(pair) {
  if (!pair || !(pair instanceof pair) || !(pair.group) || !(pair.topic))
    throw new Error("Illegal argument");
}

module.exports = {GroupTopicPair, validateGroupTopicPairArg};
