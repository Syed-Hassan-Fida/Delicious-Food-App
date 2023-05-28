const express = require('express')
const User = require("../models/user")
const router = express.Router()

router.post("./create-user", async (req, res) => {
    try{
        await User.create({
            name: "test",
            email: "test@gmail.com",
            password: "12345678",
            location: "null",
            date: Date.now
        })
        res.json({success:true})
    } catch(error){
        res.json({success:false})

    }
})

module.exports = router