//@desc Get all contacts
//@route GET/contacts

const getAllContacts=async(req,res)=>{
    try{
        res.status(200).send("Contacts Page");
    }catch(error){
        res.send(error.message);

    }
};

module.exports=getAllContacts;