const express = require('express')
const User = require("../models/user")
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secrectKey = "qwertyuioasdfgjklxcvbnmwertyuiogfghgadafadfsf"
// create user route 
router.post("/create-user",[
    body('email', "Incorrect Email").isEmail(),
    body('password', "incorrect Password").isLength({min:8})
] ,async (req, res) => {
    // do the validation out of try catch
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const salt = await bcrypt.genSalt(10)
    const secPassword = await bcrypt.hash(req.body.password, salt)

    try{
        const existingUser = await User.findOne({ email:req.body.email });
        if (existingUser) {
            return res.status(400).json({ success:true, message: 'Email already exists' });
        }

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location,
            date: Date().now
        })
        return res.status(200).json({success:true, message: 'Form Submitted Successfully'})
    } catch(error){
        return res.json({success:false, error: error})

    }
})


// login functionality
router.post("/login", [
    body('email', "Incorrect Email").isEmail(),
    body('password', "incorrect Password").isLength({min:8})
]
    , async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({success:false, errors: errors.array()})

    }
    const email = req.body.email
    try {
        const userData = await User.findOne({email})
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        console.log("check", pwdCompare)
        if(!userData){
            return res.json({success:false, message: "User Not Registered" })
        } else if(!pwdCompare){
            return res.json({success:true, message: "Password doesn't match"})
        }

        const data = {
            user: {
                id: userData.id
            }
        }

        const token = jwt.sign(data, secrectKey)

        return res.json({success:true, token: token})

    } catch(error) {
        return res.json({success:false, errors:error})
    }

})

module.exports = router