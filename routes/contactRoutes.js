const express=require("express");
const router=express.Router();

router
    .route("/contacts")
    .get((req,res)=>{
        console.log("contactsRoutes.js:/contacts")
        res.status(200);
        res.send("Contact List");
    })
router
    .route("/contacts/:id")
    .get((req,res)=>{
        console.log("contactsRoutes.js:/contacts/:id");
        res.status(200);
        res.send(`View contact id: ${req.params.id}`);
    })

module.exports=router