const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeModel = new Schema({
    firatName: {
        type: String,
        required:true,
    },
    lastName:String,
    email:String,
    age:Number,
},
{timestamps:true})
module.exports = mongoose.model("Employee",EmployeeModel);