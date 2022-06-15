const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const userModel = require("../models/userModel")
const auth = require("../middelewere/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.post("/users/:userId/posts",  auth.authenticate, auth.authorise, userController.postMessage)

router.get("/users/:userId", auth.jwtValidation, userController.getUserData)

router.delete("/users/:userId",  userController.deleteUser)
router.put("/users/:userId", userController.putUser)


module.exports = router;