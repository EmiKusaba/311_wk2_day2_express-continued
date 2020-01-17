let comments = require('../data/comments')

const list = (req, res) => res.json(comments);

// "/comments/:id"
const show = (req, res) => {
  // const commentId = req.params.id
  let commentFound = comments.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(commentFound)
};

const create = (req, res) => {
  // let newContact = req.body;
  // contacts.push(newContact)
  // res.json(newContact)
  let counter = comments.length;
  let newUser = {
    _id: counter+1,
    body: req.body.body,
    postId: 1

  }
  comments.push(newUser)
  // counter = counter + 1
  res.json(newUser)
  // console.log(newUser)
};

module.exports = { list, show, create }