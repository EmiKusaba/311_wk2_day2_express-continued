const express = require('express')
const router = express.Router()
const commentController = require('../Controllers/comments')
// router.get("/comments", (req, res) => res.json(comments));

// "/comments/:id"
router.get("/comments/:id", (req, res) => {
  // const commentId = req.params.id
  let commentFound = comments.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(commentFound)
});
router.get('/comments', commentController.list)
router.get('/comments/:id',commentController.show)
router.post('/comments',commentController.create)

module.exports = router;