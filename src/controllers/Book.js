const bookModel= require("../models/bookModel")
const AuthorModel= require("../models/AuthorModel")


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksbyChetanBhat = async function (req,res){
    let data = await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let bookdata = await bookModel.find({author_id:data[0].author_id})
    res.send({msg:bookdata})
}

const authorOfbooks = async function(req, res){
    let data = await bookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let authordata = await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let price = data.price
    res.send({msg:authordata,price})

}

const Finddata = async function(req, res){
    let  data = await bookModel.find({ price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    const a = data.map(inp => inp.author_id)
    let temp = []
    for ( let i = 0; i<a.length;i++){
        let x = a[i]
        const author = await AuthorModel.find({author_id: x}).select({author_name: 1, author_id: 1, _id:0 })
        temp.push(author)
    }
    const author_name = temp.flat()
    res.send({msg:author_name})
        
    
}


module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBooksbyChetanBhat= getBooksbyChetanBhat
module.exports.authorOfbooks=  authorOfbooks
module.exports.Finddata=Finddata