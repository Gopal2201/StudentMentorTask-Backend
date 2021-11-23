const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    StudentName: {
        type: String,
        required: true
    },
    StudentMail: {
        type: String,
        required: true
    },
    MID: {
        type: String,
        default: "1",
    }
})

const Student = mongoose.model("Student", studentSchema, "student");
module.exports = Student;