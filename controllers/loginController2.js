const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecret=process.env.JWT_SECRET;
const jwt=require("jsonwebtoken");

//@desc Register Page
//@route GET /register
const getRegister = (req, res) => {
  res.render("register");
};

//@desc Register user
//@route POST /register
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
  if (password === password2) {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "Register successful", user });
  } else {
    res.send("Register Failed");
  }
});

//@desc Get login page
//@route GET /
const getLogin = (req, res) => {
  res.render("home");
};

//@desc Login user
//@route POST /
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user =await User.findOne({username});
    if(!user){
        return res.json({message:'일치하는 사용자가 없습니다.'});
    }

    const isMatch=await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.json({message:'비밀번호가 틀렸습니다'});
    };

    const token=jwt.sign({id: user._id},jwtSecret);
    res.cookie("token",token,{httpOnly: true});
    res.redirect("/contacts");
});

module.exports = { getRegister, registerUser, getLogin, loginUser };