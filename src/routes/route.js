const express = require('express');
const underscore = require('underscore');
const _ = require('lodash');
const UserModel= require("../models/userModel");
const UserController= require("../Controllers/userController");


const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send("My First MongoDB API!!!!");
});

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;
// adding this comment for no reason