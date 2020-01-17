let vehicles = require('../data/vehicles')

const list = (req, res) => {
  return res.json(vehicles);
};
//vehicle/:id
const show = (req, res) => {
  let vehicleFound = vehicles.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(vehicleFound)
};
//vehicle Post
const create = (req, res) => {
   // let newContact = req.body;
  // contacts.push(newContact)
  // res.json(newContact)
  let counter = vehicles.length;
  let newUser = {
    _id: counter+1,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  }
  vehicles.push(newUser)
  // console.log(products)
  // counter = counter + 1
  res.json(newUser)
  // console.log(newUser)
};

module.exports = { list, show, create }