const mongoose=require("mongoose");
const newUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
    },
})

module.exports.userDetailModel = new mongoose.model("userDetailModel",newUserSchema);