const express = require('express')
const User = require("../models/user")
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.post("/create-user",[
    body('email', "Incorrect Email").isEmail(),
    body('password', "incorrect Password").isLength({min:8})
] ,async (req, res) => {
    // do the validation out of try catch
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location,
            date: Date().now
        })
        return res.json({success:true})
    } catch(error){
        return res.json({success:false, error: error})

    }
})

module.exports = router