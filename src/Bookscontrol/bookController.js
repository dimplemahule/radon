const bookSchema= require("../Books/bookSchema")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookSchema.create(data)
    res.send({msg: savedData})
}

const getbookData= async function (req, res) {
    let allBook= await bookSchema.find()
    res.send({msg: allBook})
}

module.exports.createbook= createbook
module.exports.getbookData= getbookData