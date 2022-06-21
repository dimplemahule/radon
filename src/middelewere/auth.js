const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel")


const jwtValidation = function(req, res, next){
    let token = req.headers["x-auth-token"];
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        // authorization below line
        req.userid = decodetoken.userId         
    next()
  }
    
   

module.exports.jwtValidation = jwtValidation
 

