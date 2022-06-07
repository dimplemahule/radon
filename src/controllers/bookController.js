//const { count } = require('console')

const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg: allBooks})
}
const booklist = async function (req, res) {
    let allBooks= await bookModel.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})

}

const getBooksInYear = async function(req, res){
    let books = req.query.year 
    let allBooks = await bookModel.find({year:books})
    res.send({msg: allBooks})
}

const getParticularBooks = async function(req, res){
    
    let allBooks = await bookModel.find({totalPages:req.query.totalPages}).select({bookName: 1, totalPages: 1, _id: 0 })
    res.send({msg: allBooks})
}

const getRsBooks = async function(req, res){
    
    let allBooks = await bookModel.find({ $or: [{indianPrice:"Rs 100",  indianPrice:"Rs 200", indianPrice:"Rs 500"}] })
    res.send({msg: allBooks})
}

const getRandomBooks = async function(req, res){
    
    let allBooks = await bookModel.find({$or: [{ stockAvailable: true}, {totalPages: { $gt:300 }} ]})
    res.send({msg: allBooks})
}







module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.booklist= booklist   
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getRsBooks= getRsBooks
module.exports.getRandomBooks= getRandomBooks