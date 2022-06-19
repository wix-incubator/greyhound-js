const {NewTopic, Producer, Consumer, GroupTopicPair}  = require("../src");

const topicName = "dummy";

const consumer = new Consumer("localhost", 63054);

consumer.startConsuming(new GroupTopicPair("new", topicName));

const producer = new Producer("localhost", 63054);

// console.log("\n||  ||     //\\\\     ------  ||  //    //\\\\    ----------  ||  ||   --------   ||\\\\   ||  -----  -----\n" + 
//     "||__||    //__\\\\   ||       || //    //__\\\\   ----------  ||__|| ------------ || \\\\  ||       |      |\n" +
//     "||  ||   //    \\\\  ||       || \\\\   //    \\\\      ||      ||  || ------------ ||  \\\\ ||   ----   ----\n" +
//     "||  ||  //      \\\\  ------  ||  \\\\ //      \\\\     ||      ||  ||   --------   ||   \\\\||  |_____ |_____\n");
    
producer.createTopic(new NewTopic(topicName, 8));

producer.produce(topicName, "{}", {key: "dummy"}, null);
