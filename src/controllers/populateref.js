const newAuthor = require("../models/newAuthor");
const newPublisher = require("../models/newPublisher")
const newBook = require("../models/newBook");
const { module } = require("mongoose");



const newAthourdata= async function (req, res) {
    
    let book = req.body
    let newbookCreated = await newBook.create(book)
    res.send({msg: newbookCreated})
}

const newPublisherdata= async function (req, res) {
    
    let book = req.body
    let newbookCreated = await newBook.create(book)
    res.send({msg: newbookCreated})
}

const newBookData= async function (req, res) {
    
    let book = req.body
    let newbookCreated = await newBook.create(book)
    res.send({msg: newbookCreated})
}






module.exports.newAthourdata = newAthourdata
module.exports.newPublisherdata = newPublisherdata
module.exports.newBookData = newBookData