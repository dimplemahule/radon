const express = require('express');
const router = express.Router();
 
const newAuthor = require("../models/newAuthor")
const newBook = require("../models/newBook")
const newPublisher = require("../models/newPublisher")
const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/newAthourdata", bookController.newAthourdata)
router.post("/newBookData", bookController.newBookData)
router.post("/newPublisherdata", bookController.newPublisherdata)
router.get("/populateBook",bookController.populateBook)










module.exports = router;