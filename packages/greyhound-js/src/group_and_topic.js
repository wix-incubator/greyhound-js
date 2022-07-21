class GroupAndTopic {
  constructor(group, topic) {
    if (!group || !(group instanceof String))
      throw new Error("Illegal group");
    if (!topic || !(topic instanceof String))
      throw new Error("Illegal topic");
    
    this.group = group;
    this.topic = topic;
  }
}

function validateGroupAndTopic(groupAndTopic) {
  if (!groupAndTopic || !(groupAndTopic instanceof GroupAndTopic) || 
    !(groupAndTopic.group) || !(groupAndTopic.group instanceof String) || 
    !(groupAndTopic.topic) || !(groupAndTopic.group instanceof String))
    throw new Error("Illegal group and topic");
}

module.exports = {GroupAndTopic, validateGroupAndTopic};
