const Mentor = require("../models/mentorModel");
const Student = require("../models/studentModel");

const service = {
    // To get all the mentor list
    async getallmentor(req, res) {
        try {
            const data = await Mentor.find();
            res.send(data);
        } catch (err) {
            console.error(err);
            res.send(err);
        }
    },
    // To get all the student list
    async getallstudent(req, res) {
        try {
            const data = await Student.find();
            console.log(data)
            res.send(data);
        } catch (err) {
            console.error(err);
            res.send(err);
        }
    },
    // To get the student list for a particular mentor
    async studentsformentor(req, res) {
        try {
            const data = await Student.find({MID: req.body.MID}).exec();
            res.send(data);
        } catch (err) {
            console.error(err);
            res.send(err);
        }
    },
    // To get students with no mentors
    async nomentorstudents(req, res) {
        try {
            const data = await Student.find({MID: "1"}).exec();
            console.log(data);
            res.send(data);
        } catch (err) {
            console.error(err);
            res.send(err);
        }
    },
    // To update the mentor details for multiple students without mentor
    async updatenomentorstudents(req, res) {
        try {
            const {id, SelectedStu} = req.body;
            SelectedStu.map(async (post) => {
                var response = await Student.findOneAndUpdate({_id: post.name}, {MID:id}).exec();
            })
            res.send("Mentor Assigned for Selected Users");
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = service;
    