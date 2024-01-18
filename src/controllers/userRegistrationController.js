const express = require("express");
const {securePassword,verifyPassword}=require("../utils/Password")
const {userDeatilModel}= require("../models/userDetailmodel")

 module.exports.registration = async(req,res)=>{
    const sPassword= securePassword(req.body.password)
    const newUser = new userDeatilModel({
        name:req.body.name,
        emailid:req.body.emailid,
        password:sPassword
    })
    const getData= await newUser.save();
    res.json(getData)
}