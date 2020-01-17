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
const create = ("/vehicles", (req, res) => {
  let newVehicle = req.body;
  vehicles.push(newVehicle)
  res.json(newVehicle)
});

module.exports = { list, show, create }