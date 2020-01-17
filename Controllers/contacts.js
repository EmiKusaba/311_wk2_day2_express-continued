let contacts = require('../data/contacts')

const list = (req, res) => {
  return res.json(contacts);
};
//contacts/:id
const show = (req, res) => {
  let contactFound = contacts.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(contactFound);
};
//Create new contact Post
const create = (req, res) => {
  // let newContact = req.body;
  // contacts.push(newContact)
  // res.json(newContact)
  let counter = contacts.length;
  let newUser = {
    _id: counter+1,
    name: req.name,
    occupation: req.occupation,
    avatar:req.avatar,

  }
  contacts.push(newUser)
  // counter = counter + 1
  res.json(newUser)
  // console.log(newUser)
};
module.exports = { list, show, create }
