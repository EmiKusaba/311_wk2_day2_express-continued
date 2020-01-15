const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static('public'))

//comments
const comments = require('./data/comments')
const contacts = require('./data/contacts')
const products = require('./data/products')
const vehicles = require('./data/vehicles')

app.get("/comments", (req, res) => res.json(comments));

// "/comments/:id"
app.get("/comments/:id", (req, res) => {
  // const commentId = req.params.id
  let commentFound = comments.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(commentFound)
});

//contacts
app.get("/contacts", (req, res) => {
  return res.json(contacts);
});
//contacts/:id
app.get("/contacts/:id", (req, res) => {
  let contactFound = contacts.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(contactFound)
});
//Create new contact Post
app.post("/contacts", (req, res) => {
  let counter = contacts.length + 1
  // let newContact = req.body;
  // contacts.push(newContact)
  // res.json(newContact)
  let newUser = {
    _id: counter,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }
  contacts.push(newUser);
  counter = counter + 1
  res.json(newUser)
  console.log(newUser)
});
//products
app.get("/products", (req, res) => {
  return res.json(products);
});
//products/:id
app.get("/products/:id", (req, res) => {
  let productFound = products.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(productFound)
});
//vehicle
app.get("/vehicles", (req, res) => {
  return res.json(vehicles);
});
//vehicle/:id
app.get("/vehicles/:id", (req, res) => {
  let vehicleFound = vehicles.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(vehicleFound)
});



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
