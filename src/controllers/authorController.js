const authorModel = require("../models/authorModel");
//const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const validateEmail = function (email) {
    return (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/).test(email)
}


const createAuthor = async (req, res) => {
  try {
    let getData = req.body;

    if (Object.keys(getData).length == 0){
        return res.status(400).send({ status: false, msg: "Data is required to add a Author" });
    }
    
    if((getData.fname) == 0){
      return res.status(400).send({ status: false, msg: "Enter your first Name" });
    }
    if((getData.lname) == 0){
      return res.status(400).send({ status: false, msg: "Enter your last Name" });
    }
    if((getData.title) == 0){
      return res.status(400).send({ status: false, msg: "Enter your title Name" });
    }
    if (!["Mr", "Miss", "Mrs"].includes(getData.title)) {
        return res.status(400).send({ status: false, msg: "Title must includes['Mr','Miss','Mrs']" })
    }
    if((getData.email) == 0){
      return res.status(400).send({ status: false, msg: "Enter your Email id" });
    }
    if(!validateEmail(req.body.email)) return res.status(400).send({ status: false, msg: "Enter a valid email" })
    req.body.email = req.body.email.toLowerCase() 
    let emailAllReadyExist =  await authorModel.findOne({email:getData.email}) 
    if(emailAllReadyExist){
        return res.status(400).send({ status: false, msg: "Email all ready exists" });
      }
    if((getData.password) == 0){
      return res.status(400).send({ status: false, msg: "Enter your password" });
    }

    let showAuthorData = await authorModel.create(getData);
    res.status(201).send({ status: true, data: showAuthorData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
}


//===============================================login Author==========================

const loginauthor = async function (req, res){
  try{
    let authorEmail = req.body.email;
    let password = req.body.password;
    let author = await authorModel.findOne({email:authorEmail, password:password});
    if(!author) return res.status(404).send({status: false, msg:"username & password is not corerct",});
    let token = jwt.sign({authorId: author._id.toString(),batch:"Radon", organization:"FunctionUp"}, "Function-Up radon");
    res.setHeader("x-api-key", token);
    return res.status(200).send({status:true, token: token});
  }
  catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};



  module.exports ={createAuthor,loginauthor} ;
  