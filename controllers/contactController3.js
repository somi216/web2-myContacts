const asyncHandler=require("express-async-handler");

//@desc Get all contacts
//@route GET/contacts

const getAllContacts=asyncHandler( async(req,res)=>{
    res.send("Contacts Page");
});

//Create contact
//POST /contacts
const createContact = asyncHandler(async(req,res)=>{
    console.log(req,body);
    const{name,email,phone}=req.body;
    if(!name||!email||!phone){
        return res.status(400).send("필수값이 입력되지 않았습니다.");

    }
    res.status(201).send("Create Contacts");

})

module.exports={getAllContacts, createContact};