const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel")


const jwtValidation = function(req, res, next){

    let token = req.headers["x-auth-token"];
    try{
      if(!token) return res.send({status:false, msg:"token must be preset"});
      let decodetoken = jwt.verify(token, "Function-Up radon");
      if(!decodetoken) return res.status(401).send({status: false, msg:"your decode token is invalid"});
       console.log("hhhiiii")
    }
    catch(err){
      console.log("token verify is an error", err)
      res.satatus(500).send({ msg: "please check your verification data", error:err });
    } 
    

    next()
  } 
    
const authorise = function(req, res, next) {
      
try{
  let token = req.headers["x-auth-token"];
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userToBeModified = req.params.userId
        let userLoggedIn = decodetoken.userId
        if(userToBeModified != userLoggedIn) return res.status(401).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

}
catch(err){
  console.log("token verify is an error", err)
  res.satatus(500).send({ msg: "please check your verification data", error:err });
}    
      
         next()
     }

module.exports.jwtValidation = jwtValidation
module.exports.authorise = authorise
 

