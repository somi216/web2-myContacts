const express = require("express");
const errorhandler=require("./middlewares/errorhandler");
const app=express();
const port=3000

app.get("/",(req,res)=>{
    console.log("app.js : /")
    res.status(200);
    res.send("Hello node!");
})

app.use("/",require("./routes/contactRoutes2"));

app.get("/test",(req,res,next)=>{
    const error = new Error("테스트용 에러");
    error.status=401;
    next(error);
});

app.use(errorhandler);

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})