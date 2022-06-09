const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModels")
// const UserController= require("../controllers/userController")

// const bookModel= require("../models/bookModel")
// const bookAuthor= require("../models/AuthorModel")
// const Book= require("../controllers/Book")

const populateref = ("../controllers/populateref")
const newAuthor = ("../models/newAuthor")
const newBook = ("../models/newBook")
const newPublisher = ("../models/newPublisher")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createAuthor", Book.createAuthor)
// router.post("/createBook", Book.createBook)

// router.get("/getBooksbyChetanBhat", Book.getBooksbyChetanBhat)
// router.post("/authorOfbooks", Book.authorOfbooks)
// router.get("/Finddata", Book.Finddata)










module.exports = router;