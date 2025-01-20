const express = require("express");
const app=express();
const port=3000

const logger = (req,res,next)=>{
    console.log("User Logged");
    next();
};

app.use("/",require("./routes/contactRoutes2"));

app.route("/").get((req,res)=>{
    res.status(200).send("Hello Node!");
});
app.use(logger);

app.use(express.json())

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})