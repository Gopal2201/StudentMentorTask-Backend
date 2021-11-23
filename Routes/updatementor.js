const router = require("express").Router();
const service = require("../Services/updatementorService");

router.patch("/mentor/:SID", service.updatementor);

module.exports = router;