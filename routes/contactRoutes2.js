const express = require("express");
const router=express.Router();

router
    .route("/")
    .get((req,res)=>{
        res.status(200).send("Contacts Page");
    })
    .post((req,res)=>{
        console.log(req.body);
        const{name,email,phone}=req.body;
        if(!name||!email||!phone){
            return res.status(400).send("필수값이 입력되지 않았습니다.");
        };
        res.status(201).send("Create Contacts");
    });

module.exports=router