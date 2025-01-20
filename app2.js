const express = require("express");
const app=express();
const port=3000

app.get("/",(req,res)=>{
    console.log("app.js : /")
    res.status(200);
    res.send("Hello node!");
})

app.use("/",require("./routes/contactRoutes"));

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})