const express = require('express')
const router = express.Router()
const vehicleController = require('../Controllers/vehicle')
// router.get("/comments", (req, res) => res.json(comments));

// "/comments/:id"
router.get("/vehicle/:id", (req, res) => {
  // const vehicleId = req.params.id
  let vehicleFound = comments.find(x => x._id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(vehicleFound)
});
router.get('/vehicle', vehicleController.list)
router.get('/vehicle/:id',vehicleController.show)
router.post('/vehicle',vehicleController.create)

module.exports = router;