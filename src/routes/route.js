const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const userModel = require("../models/userModel")
//const auth = require("../middelewere/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)

router.get("/users/:userId", userController.getUserData)

router.delete("/users/:userId", userController.deleteUser)
router.put("/users/:userId", userController.putUser)

module.exports = router;