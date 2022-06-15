const express = require('express');
const router = express.Router();
const useModel= require("../models/useModel.js")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

    router.post("/createUse", commonMW.mid1, UserController.createUse)
    router.post("/productUser",UserController.productUser)
    router.post("/createOrder", UserController.createOrder)
    
//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)
// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)

module.exports = router;