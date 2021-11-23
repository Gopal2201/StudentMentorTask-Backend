const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    MentorMail: {
        type: String,
        required: true
    },
    MentorName: {
        type: String,
    },
})

const Mentor = mongoose.model("Mentor", mentorSchema, "mentor");
module.exports = Mentor;