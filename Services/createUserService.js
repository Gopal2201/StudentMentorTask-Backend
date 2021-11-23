const Student = require("../models/studentModel");
const Mentor = require("../models/mentorModel");

const service = {
    async mentor(req, res) {
        try {
            // Check if user already exists
            req.body.MentorMail = req.body.MentorMail.toLowerCase();
            const user = await Mentor.findOne({MentorMail: req.body.MentorMail});
            if (user) { return res.sendStatus(400) } else {
                //Creating Mentor Object
                const mentorobj = new Mentor({
                    MentorMail: req.body.MentorMail,
                    MentorName: req.body.MentorName,
                })
                let response = await mentorobj.save(function(err,results){
                    if (err) {
                        console.log(err);
                    } else {
                        res.sendStatus(200);
                    }
                });
            };
        } catch (err) {
            console.error("Insert error");
        }
    },
    async student(req, res) {
        try {
            // Check if user already exists
            req.body.StudentMail = req.body.StudentMail.toLowerCase();
            const user = await Student.findOne({StudentMail: req.body.StudentMail});
            if (user) { return res.sendStatus(400) };
            // Creating Student Object
            const studentobj = new Student({
                StudentName: req.body.StudentName,
                StudentMail: req.body.StudentMail,
                MID: req.body.MID,
            })
            let response = studentobj.save(function(err,results){
                if (err) {
                    console.log(err);
                } else {
                    res.sendStatus(200);
                }
            });
        } catch (err) {
            console.error("Insert error");
            res.send(err);
        }
    },
}

module.exports = service;