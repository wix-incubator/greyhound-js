const {NewTopic, Producer, Consumer, GroupTopicPair}  = require("../src");

const topicName = "dummy";
const ghPort = 64417;

const consumer = new Consumer("localhost", ghPort);
try {
  consumer.startConsuming(new GroupTopicPair("new", topicName));
    
  const producer = new Producer("localhost", ghPort);
    
    // console.log("\n||  ||     //\\\\     ------  ||  //    //\\\\    ----------  ||  ||   --------   ||\\\\   ||  -----  -----\n" + 
    //     "||__||    //__\\\\   ||       || //    //__\\\\   ----------  ||__|| ------------ || \\\\  ||       |      |\n" +
    //     "||  ||   //    \\\\  ||       || \\\\   //    \\\\      ||      ||  || ------------ ||  \\\\ ||   ----   ----\n" +
    //     "||  ||  //      \\\\  ------  ||  \\\\ //      \\\\     ||      ||  ||   --------   ||   \\\\||  |_____ |_____\n");
        
  producer.createTopic(new NewTopic(topicName, 8));
    
  producer.produce(topicName, "{}", {key: "dummy"}, null);    
} finally {
    consumer.shutdown();
}
