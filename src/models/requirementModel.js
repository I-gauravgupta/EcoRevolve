const mongoose=require("mongoose");
const newreqSchema = new mongoose.Schema({
    wasteName:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
    },
})

module.exports.requirementModel = new mongoose.model("requirementModel",newreqSchema);