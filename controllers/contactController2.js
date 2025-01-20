const asyncHandler=require("express-async-handler");

//@desc Get all contacts
//@route GET/contacts

const getAllContacts=asyncHandler( async(req,res)=>{
    res.status(200).send("Contacts Page");
});

module.exports=getAllContacts;