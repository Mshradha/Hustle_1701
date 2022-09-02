const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    hello : String,
    About: String ,
    Courses: String,
    Fees: String,
    ISA : String,
    Curriculam: String,
    Placement: String

});

const UserModel = mongoose.model("final", userSchema);

module.exports = UserModel;