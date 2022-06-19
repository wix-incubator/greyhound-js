const {NewTopic, Producer}  = require("../src");

const topicName = "dummy";
const producer = new Producer("localhost", 59834);

console.log("\n||  ||     //\\\\     ------  ||  //    //\\\\    ----------  ||  ||   --------   ||\\\\   ||  -----  -----\n" + 
    "||__||    //__\\\\   ||       || //    //__\\\\   ----------  ||__|| ------------ || \\\\  ||       |      |\n" +
    "||  ||   //    \\\\  ||       || \\\\   //    \\\\      ||      ||  || ------------ ||  \\\\ ||   ----   ----\n" +
    "||  ||  //      \\\\  ------  ||  \\\\ //      \\\\     ||      ||  ||   --------   ||   \\\\||  |_____ |_____\n");
    
producer.createTopic(new NewTopic(topicName, 8));

producer.produce(topicName, "{}", {key: "dummy"}, null);
