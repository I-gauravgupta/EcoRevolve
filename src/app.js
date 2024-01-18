const express = require("express");
const app= express();
const route=require("./routes/routes");
const PORT = process.env.PORT || 3000;
require("./db/connection")
app.use(route)


app.listen(PORT,()=>{
    console.log("serevr is started");
})