const express = require('express')
const router = express.Router()
const contactController = require('../Controllers/contacts')

router.get("/contacts",contactController.list)
//contacts/:id
router.get("/contacts/:id", contactController.show) 
//Create new contact Post
router.post("/contacts", contactController.create)

module.exports = router;