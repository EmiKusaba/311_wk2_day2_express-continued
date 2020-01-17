const express = require('express')
const router = express.Router()
const productController = require('../Controllers/products')
// router.get("/comments", (req, res) => res.json(comments));

// "/comments/:id"
router.get("/products/:id", (req, res) => {
  // const commentId = req.params.id
  let productsFound = comments.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(productsFound)
});
router.get('/comments', productController.list)
router.get('/comments/:id',productController.show)
router.post('/comments',productController.create)

module.exports = router;