const UseModel= require("../models/useModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
const useModel = require("../models/useModel")

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
        let orderDetails = req.body
        let userId = orderDetails.userId
        let productId = orderDetails.productId
        let user = await useModel.findById(userId)
        if(!user) {
            return res.send({status: false, message: "user doesnt exist"})
        }
        let product = await productModel.findById(productId)
        if(!product) {
            return res.send({status: false, message: "product doesnt exist"})
        }
        //Scenario 1 : Paid app and user balance is greater than or equal to product price
        // if(!req.appTypeFree && user.balance >= product.price) {
        //     user.balance = user.balance - product.price
        //     await user.save()
        //     orderDetails.amount = product.price
        //     orderDetails.isFreeAppUser = false
        //     let orderCreated = await orderModel.create(orderDetails)
        //     return res.send({status: true, data :orderCreated})
        // } else if(!req.appTypeFree) {
        // //Scenario 2 : Paid app and user balance is less than product price
        //     return res.send({status: false, message:"User deosnt have sufficient balance"})
        // } else {
        // //Scenario 3 : Free app
        //     orderDetails.amount = 0
        //     orderDetails.isFreeAppUser = true
        //     let orderCreated = await orderModel.create(orderDetails)
            res.send({status: true, data: orderCreated})
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