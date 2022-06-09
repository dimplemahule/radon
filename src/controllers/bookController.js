const newAuthor = require("../models/newAuthor")
const newPublisher = require("../models/newPublisher")
const newBook = require("../models/newBook")

const newAthourdata= async function (req, res) {
    let book = req.body
    let bookCreated = await newAuthor.create(book)
    res.send({data: bookCreated})
}

const newPublisherdata= async function (req, res) {
    let book = req.body
    let bookCreated = await newPublisher.create(book)
    res.send({data: bookCreated})
}
const newBookData= async function (req, res) {
    let book = req.body
    let bookCreated = await newBook.create(book)
    res.send({data: bookCreated})
}

const populateBook = async function (req, res){

    let specificBook = await newBook.find().populate('newauthor_id'||'newpublisher_id')
    res.send({data: specificBook})

}

module.exports.newAthourdata= newAthourdata
module.exports.newPublisherdata = newPublisherdata
module.exports.newBookData = newBookData
module.exports.populateBook = populateBook
