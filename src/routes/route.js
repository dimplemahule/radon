const express = require('express');
const _ = require('lodash');
const bookSchema= require("../Books/bookSchema");
const BookController= require("../Bookscontrol/bookController");


const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send("My First MongoDB API!!!!");
});

router.post("/createbook", BookController.createbook  )

router.get("/getbookData", BookController.getbookData)

module.exports = router;
// adding this comment for no reason