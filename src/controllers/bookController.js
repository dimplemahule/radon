const newAuthor = require("../models/newAuthor")
const newPublisher = require("../models/newPublisher")
const newBook = require("../models/newBook")

// const midd = require("../middelewere/middelewere")

// const { times } = require("lodash")

// const basicRout = async function (req, res, next){

//         let a = new Date();
//         let IP = req.socket.remoteAddress;
//         let API = req.path;
//         console.log (a + "," + IP + "," + API), next();
    

//     res.send({ msg: "Basic Router middelewere"})
//     }


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

const Upadatekey=async function(req,res){
    let data=await newPublisher.find({name:"HarperCollins"}).select("_id")
    let data2=await newPublisher.find({name:"Penguin"}).select("_id")
    let UpdateHardCover=await newBook.updateMany({newpublisher_id:data},{$set:{isHardCover:true}})
    let UpdateHardCover2=await newBook.updateMany({newpublisher_id:data2},{$set:{isHardCover:true}})
    res.send({msg:UpdateHardCover,UpdateHardCover2})
}

const Upadateprice =async function (req, res) {
    let authorRating = await newAuthor.find({rating:{$gt:3.5}}).select("_id")
    let updatedprice= await newBook.updateMany({author_id:authorRating}, {$inc: {price:+10}})
    res.send({data:updatedprice })

}



module.exports.newAthourdata= newAthourdata
module.exports.newPublisherdata = newPublisherdata
module.exports.newBookData = newBookData
module.exports.populateBook = populateBook
module.exports.Upadatekey = Upadatekey
module.exports.Upadateprice = Upadateprice
module.exports.basicRout = basicRout