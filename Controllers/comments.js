let comments = require('../data/comments')

const list = (req, res) => res.json(comments);

// "/comments/:id"
const show = (req, res) => {
  // const commentId = req.params.id
  let commentFound = comments.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(commentFound)
};

module.exports = { list, show, create }