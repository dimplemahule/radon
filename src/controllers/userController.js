const UseModel= require("../models/useModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")

// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }

// const createUser= async function (req, res) {
//     let data= req.body
//     let tokenDataInHeaders = req.headers.token
//     console.log("Request headers befor modification",req.headers)
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     req.headers['month']='jun'
//     req.anything = "everything"
//     console.log(tokenDataInHeaders)
//     ///let savedData= await UserModel.create(data)


//     //set a headers in response
//     res.headers('year','2022')
//     res.send({msg: "hiiii"})
// }

const createUse= async function (req, res) {
        let data= req.body
        let savedData= await UseModel.create(data)
        res.send({msg: savedData})
    }
    const productUser= async function (req, res) {
        let data= req.body
        let productData= await productModel.create(data)
        res.send({msg: productData})
    }
    const orderUser= async function (req, res){
        let data= req.body
        let orderData= await orderModel.create(data)
        res.send({msg: orderData})
    }


// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

module.exports.createUse= createUse
module.exports.productUser= productUser
module.exports.orderUser= orderUser
//module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode