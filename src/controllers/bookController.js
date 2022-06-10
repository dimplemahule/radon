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
    // let newauthor_id = book.newauthor_id
    // let newpublisher_id = book.newpublisher_id
    const {newauthor_id, newpublisher_id, } = book
    if (!newauthor_id){
        return res.send("Author id required")
    }
    let author = await newAuthor.findById(newauthor_id)
   
    if (!author){
        return res.send("Author dose not exits")
    }
    if (!newpublisher_id){
        return res.send("Publisher id required")
    }
    let publisher = await newPublisher.findById(newpublisher_id)
    
    if (!publisher){
        return res.send(" publisher dose not exits")
    }
    let bookCreated = await newBook.create(book)
    res.send({data: bookCreated})
}

const populateBook = async function (req, res){

    let specificBook = await newBook.find().populate(['newauthor_id','newpublisher_id'])
    res.send({data: specificBook})

}

const getAuthorData = async function(req, res){
   let authors =  await newAuthor.find({rating:{$gte:3.5}}).select("_id")
    let key = await newBook.updateMany(
        {price:{$lt:50}},{
            $set:{price:60}
        }
    )
    res.send({msg:key})
}


module.exports.newAthourdata= newAthourdata
module.exports.newPublisherdata = newPublisherdata
module.exports.newBookData = newBookData
module.exports.populateBook = populateBook
module.exports.getAuthorData = getAuthorData