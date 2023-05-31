const express = require('express')
const Product = require("../models/schema")
const router = express.Router()

router.get("/products", async (req, res) => {
    try{
        await Product.find()
        Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(404).json({ noProductsFound: 'No Products found' }));

    } catch(error){
        res.json({success:false})
    }
}) 

module.exports = router