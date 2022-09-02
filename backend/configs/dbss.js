const mongoose = require("mongoose");
// require("dotenv").config();

const connect = mongoose.connect("mongodb+srv://parthdeshmukh99:ji83O4JSpIAVJWC7@cluster0.grvtf3q.mongodb.net/hustle?retryWrites=true&w=majority")

module.exports = connect ;
