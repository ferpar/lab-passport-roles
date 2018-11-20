const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {type: String, unique: true },
    duration: {type: Number}
},
    {
        timestamps: true
    });

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;