const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel")


const jwtValidation = function(req, res, next){
    let token = req.headers["x-auth-token"];
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
  console.log("hhhiiii")
    next()
  }

  const authenticate = function(req, req, next) {
        //check the token in request header
        let token = req.headers["x-auth-token"];
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
    
    //     //validate this token
    
       next()
     }
    
    const authorise = function(req, res, next) {
      // comapre the logged in user's id and the id in request
      let token = req.headers["x-auth-token"]
      if(!token) return res.send({status: false, msg: "token must be present in the request header"})
      let decodedToken = jwt.verify(token, 'Function-Up radon')
      if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
      let userToBeModified = req.params.userId
      let userLoggedIn = decodedToken.userId
      if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
      
         next()
     }

module.exports.jwtValidation = jwtValidation
module.exports.authenticate = authenticate
module.exports.authorise = authorise
 

