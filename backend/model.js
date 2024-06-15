const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    coursename: {
        type:String,
        required:true
    }, 
    
    
    university: {
        type:String,
        required:true
    }, 
    year: {
          type:Number,
          required:true
    }
});


module.exports = new mongoose.model("student", studentSchema)

