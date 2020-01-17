const express = require('express')
const router = express.Router()
const commentController = require('../Controllers/comments')
// router.get("/comments", (req, res) => res.json(comments));

router.get('/comments', commentController.list)
//contacts/:id
router.get('/comments/:id',commentController.show)
//Create new contact Post
router.post('/comments',commentController.create)

module.exports = router;