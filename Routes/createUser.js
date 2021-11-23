const router = require("express").Router();
const service = require("../Services/createUserService")

router.post("/student", service.student);
router.post("/mentor", service.mentor);

module.exports = router;