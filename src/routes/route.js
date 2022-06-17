const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const userModel = require("../models/userModel")
const auth = require("../middelewere/auth")
const cowinController = require("../controllers/cowinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//================================================REgistration user and passwword========================================================

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.post("/users/:userId/posts",  auth.jwtValidation, auth.authorise, userController.postMessage)

router.get("/users/:userId", auth.jwtValidation, userController.getUserData)

router.delete("/users/:userId",  userController.deleteUser)
router.put("/users/:userId", userController.putUser)

//=============================Axios and Promise using try and catch=======================

router.get("/cowin/getdistrictId", cowinController.getdistrictsession)
router.get("/cowin/wetherdata", cowinController.getwether)
router.get("/sorteddata", cowinController.getSortedCity)
router.post("/memescreation", cowinController.memesHandaler)

module.exports = router;