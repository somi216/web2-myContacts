const asyncHandler = require("express-async-handler");
const Contact=require("../models/contactModel");

// @desc Get all contacts
// @route GET /contacts
// 전체 연락처 보기
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.render("index",{contacts:contacts});
});

//View add Contact form
//GET /contacts/add
const addContactForm = (req, res) => {
    res.render("add2");
  };
  

// @desc Create a contact
// @route POST /contacts/add
// 새 연락처 추가하기
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }

  const contact=await Contact.create({
    name,
    email,
    phone,
  } );
  res.status(201).send("Create Contacts");
});

// @desc Get contact
// @route GET /contacts/:id
// 연락처 상세 보기
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.send(contact);
});

// @desc Update contact
// @route PUT /contacts/:id
// 연락처 수정하기
const updateContact = asyncHandler(async (req, res) => {
  const id=req.params.id;
  const {name,email,phone}=req.body;
  const contact=await Contact.findById(id);
  if(!contact){
    throw new Error("Contact not found.");
  }

  contact.name=name;
  contact.email=email;
  contact.phone=phone;

  contact.save();

  res.json(contact);
});

// @desc Delete contact
// @route DELETE /contacts/:id
// 연락처 삭제하기
const deleteContact = asyncHandler(async (req, res) => {
  const id=req.params.id;

  const contact=await Contact.findById(id);
  if(!contact){
    throw new Error("Contact not found.");
  }

  await Contact.deleteOne();
  res.send("Deleted");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
};