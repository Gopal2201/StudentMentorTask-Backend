const mongoose = require("mongoose");

// "mongodb+srv://Gopal:Gopal123@cluster0.supaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/Mentor-Student-Task"

exports.connect = () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}`, {useNewUrlParser : true, useUnifiedTopology: true});
    } catch (err) {
        console.error(err);
        process.exit();
    }
}
