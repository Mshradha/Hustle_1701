const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    About: String ,
    Courses: String,
    Fees: String,
    ISA : String,
    Curriculam: String,
    Placement: String

});

const UserModel = mongoose.model("masai", userSchema);

module.exports = UserModel;