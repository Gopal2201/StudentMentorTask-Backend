const Student = require("../models/studentModel")

// To update mentor for a particular student
exports.updatementor = async (req,res,next) => {
    console.log(req.params);
    const {SID} = req.params;
    const response = await Student.findByIdAndUpdate(SID, {
        MID: req.body.MID
    }, {new:true})
    console.log(response);
    res.send(response);
}