let products = require('../data/products')

const list = (req, res) => {
  return res.json(products);
};
//products/:id
const show = (req, res) => {
  
  let productFound = products.find(x => x._id == req.params.id)
  console.log("products", productFound)
  res.json(productFound)
  // return productFound;
};
//products Post
const create = (req, res) => {
   // let newContact = req.body;
  // contacts.push(newContact)
  // res.json(newContact)
  let counter = products.length;
  let newUser = {
    _id: counter+1,
    name: req.body.name,
    description: req.body.description,

  }
  products.push(newUser)
  // console.log(products)
  // counter = counter + 1
  res.json(newUser)
  // console.log(newUser)
};
module.exports = { list, show, create }