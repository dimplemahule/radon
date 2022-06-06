const express = require('express');
const _ = require('lodash');
const bookSchema= require("../models/bookSchema");
const UserController= require("../Controllers/userController");


const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send("My First MongoDB API!!!!");
});

router.post("/createbook", UserController.createbook  )

router.get("/getbookData", UserController.getbookData)

module.exports = router;
// adding this comment for no reason