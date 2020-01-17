let products = require('../data/products')

const list = (req, res) => {
  return res.json(products);
};
//products/:id
const show = (req, res) => {
  let productFound = products.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(productFound)
};
//products Post
const create = (req, res) => {
  let newProduct = req.body;
  products.push(newProduct)
  res.json(newProduct)
};
module.exports = { list, show, create }