const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use(express.static('public'))

//data
let comments = require('./data/comments')
let contacts = require('./data/contacts')
let products = require('./data/products')
let vehicles = require('./data/vehicles')

//routes
const commentRoute = require("./routes/comments") 
const contactRoute = require("./routes/comments") 
const productRoute = require("./routes/comments") 
const vehicleRoute = require("./routes/comments") 


//app.use

app.use(commentRoute)
app.use(contactRoute)
app.use(productRoute)
app.use(vehicleRoute)

//COMMENTS
const commentApp = require('./routes/comments')
app.use(commentApp)
// app.get("/comments", (req, res) => res.json(comments));
// // "/comments/:id"
// app.get("/comments/:id", (req, res) => {
//   // const commentId = req.params.id
//   let commentFound = comments.find(x => x._id == req.params.id)
//   // console.log(commentId, commentFound)
//   res.json(commentFound)
// });

//CONTACTS
const contactApp = require('./routes/contacts')
app.use(contactApp)
//contacts
// app.get("/contacts", (req, res) => {
//   return res.json(contacts);
// });
// //contacts/:id
// app.get("/contacts/:id", (req, res) => {
//   let contactFound = contacts.find(x => x._id == req.params.id)
//   // console.log(commentId, commentFound)
//   res.json(contactFound);
// });
// //Create new contact Post
// app.post("/contacts", (req, res) => {
//   // let newContact = req.body;
//   // contacts.push(newContact)
//   // res.json(newContact)
//   let counter = contacts.length;
//   let newUser = {
//     _id: counter+1,
//     body: req.body.body,
//     postId: 1

//   }
//   contacts.push(newUser)
//   // counter = counter + 1
//   res.json(newUser)
//   console.log(newUser)
// });



const productApp = require('./routes/products')
app.use(productApp)
//products
// app.get("/products", (req, res) => {
//   return res.json(products);
// });
// //products/:id
// app.get("/products/:id", (req, res) => {
//   let productFound = products.find(x => x._id == req.params.id)
//   // console.log(commentId, commentFound)
//   res.json(productFound)
// });
// //products Post
// app.post("/products", (req, res) => {
//   let newProduct = req.body;
//   products.push(newProduct)
//   res.json(newProduct)
// });

//vehicle
// const vehicleApp = require('./routes/vehicles')
// app.use(vehicleApp)
app.get("/vehicles", (req, res) => {
  return res.json(vehicles);
});
//vehicle/:id
const vehicleApp = require('./routes/vehicles')
app.use(vehicleApp)
// app.get("/vehicles/:id", (req, res) => {
//   let vehicleFound = vehicles.find(x => x._id == req.params.id)
//   // console.log(commentId, commentFound)
//   res.json(vehicleFound)
// });
// //vehicle Post
// app.post("/vehicles", (req, res) => {
//   let newVehicle = req.body;
//   vehicles.push(newVehicle)
//   res.json(newVehicle)
// });



app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
