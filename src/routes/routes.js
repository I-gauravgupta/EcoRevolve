const express = require("express");
const route = new express.Router();
const {registration}= require("../controllers/userRegistrationController")
const {authorization}= require("../middlewares/Authorization");
const CookieParser = require("cookie-parser");

route.use(express.json());
route.use(CookieParser());

// registration 
route.post("/register",registration);

// //verification
// route.get("/verify",getUserVerified);

// //login & logout
// route.get("/login",authorization,letUserLogined);
// route.get("/logout",deleteCookies);

// //enquiry
// route.get("/enquiry",authorization,sentEnquiryMail);

// // post requirement
// route.post("/postReq",authorization,savePostReq);

// // sell waste
// route.post("/sellWaste",authorization,saaveWasteDetails);




module.exports = route;