const jwt = require("jsonwebtoken");


const jwtValidation = function(req, res, next){
    let token = req.headers["x-api-key"];
        if(!token) return res.status(401).send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.status(401).send({status: false, msg:"your decode token is invalid"});
        // authorization below line
        req.authorId = decodetoken.authorId         
    next()
  }
    
   

module.exports.jwtValidation = jwtValidation
 

