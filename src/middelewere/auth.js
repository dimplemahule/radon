const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

const mid1= async function ( req, res, next) {
    let token = req.headers["x-auth-token"];
        
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.send({status: false, msg:" No such user exit"});
        next()
        res.send({status:true, data: userDetails});
    
}

const mid2= async function ( req, res, next) {
    let token = req.headers["x-auth-token"];
        
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.send({status: false, msg:" No such user exit"});
        let deleteData = await userModel.findOneAndUpdate({_id:userDetails},{$set:{isDeleted:true}},{new:true})
        next()
        res.send({status:true, data: deleteData});
    
}

const mid3= async function ( req, res, next) {
    let data = req.body
    let token = req.headers["x-auth-token"];
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.send({status: false, msg:" No such user exit"});
        let putData = await userModel.findOneAndUpdate({_id:userDetails},data,{new:true})
        next()
        res.send({status:true, data: putData});
    
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4

