const express = require("express");
const app=express();
const router=express.Router();
const port=3000;

app.get("/",(req,res)=>{
    res.status(200);
    res.send("Hello Node");
})

router.get("/contacts",(req,res)=>{
    res.status(200);
     res.send("Contact List");
})

router.get("/contacts/:id",(req,res)=>{
    res.status(200);
    res.send(`View Contact id : ${req.params.id}`);
})

app.use(router); //중요하요

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)

})