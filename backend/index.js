const express = require('express')
const mongoDB = require("./db")
const bodyParser = require('body-parser');
const app = express()
const port = 5000

const Product = require("./models/schema")

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./Routes/CreateUser"))
app.use("/api", require("./Routes/Products"))

mongoDB()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/products', (req, res) => {
//     Product.find()
//       .then(products => res.json(products))
//       .catch(err => res.status(404).json({ noProductsFound: 'No Products found' }));
// });

// app.post('/add-product', (req, res) => {
//     // const { name, price } = req.query;
//     // console.log(name)
//     Product.create(req.query)
//       .then(products => res.json({ msg: 'products added successfully' }))
//       .catch(err => res.status(400).json({ error: err }));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})