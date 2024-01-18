const mongoose=require("mongoose");
const newSellSchema = new mongoose.Schema({
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

module.exports.sellWasteModel = new mongoose.model("sellWasteModel",newSellSchema);