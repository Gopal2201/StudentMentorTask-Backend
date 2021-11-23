const router = require("express").Router();
const service = require("../Services/getMentorStuList");

router.get("/mentor", service.getallmentor); // Get all mentor list
router.get("/getallstudents", service.getallstudent); //Get all students list
router.post("/studentsformentor", service.studentsformentor); // To Retrive List of students for one mentor
router.get("/nomentorstudents", service.nomentorstudents); // To Retrive list of students with no mentor
router.post("/updatenomentorstudents", service.updatenomentorstudents); // To Retrive list of students with no mentor


module.exports = router;