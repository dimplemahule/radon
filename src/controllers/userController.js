const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
//const auth = require("../middelewere/auth")
//const userController = require("./userController")
const userModel = require("../models/userModel")

//=====================Post (Create data )========================

const createUser = async function (req, res) {
  try{
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  }
    catch(err){
      console.log("This is the error", err)
      res.satatus(500).send({ message:err.message });
    }
    
  };

  //=========================loginUser Sign Up=======================

  const loginUser = async function (req, res){
    let userName = req.body.email_Id;
    let password = req.body.password;
    try{
      let user = await userModel.findOne({email_Id:userName, password:password});
    if(!user) return res.status(400).send({status: false, msg:"username & password is not corerct",});
    let token = jwt.sign({userId: user._id.toString(),batch:"Radon", organization:"FunctionUp"}, "Function-Up radon");
    res.setHeader("x-auth-token", token);
    res.status(200).send({status:true, token: token});
    }
    catch(err){
      console.log("Login  error", err)
      res.satatus(500).send({ message:err.message});
    }
  };

  //========================Get user verify the data=======================

  const getUserData = async function (req, res){
try{
// let token = req.headers["x-auth-token"];
        // if(!token) return res.send({status:false, msg:"token must be preset"});
        // let decodetoken = jwt.verify(token, "Function-Up radon");
        // if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.status(404).send({status: false, msg:" No such user exit"});
        res.status(200).send({status:true, data: userDetails});
}
catch(err){
  console.log("token verify is an error", err)
  res.satatus(500).send({ message:err.message});
}     

  }


//========================Delete the perticular isDeleted:true===========

const deleteUser = async function(req, res){
   
    let token = req.headers["x-auth-token"];
        try{
          if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.status(400).send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.status(404).send({status: false, msg:" No such user exit"});
        let deleteData = await userModel.findOneAndUpdate({_id:userDetails},{$set:{isDeleted:true}},{new:true})
        res.status(200).send({status:true, data: deleteData});
        }
        
        catch(err){
          console.log("token error", err)
          res.satatus(500).send({ message:err.message });
        }
}

//===============================update user puth the data in body section and update in database=======
const putUser = async function(req, res){
    let data = req.body
    let token = req.headers["x-auth-token"];
    try{
      if(!token) return res.send({status:false, msg:"token must be preset"});
      let decodetoken = jwt.verify(token, "Function-Up radon");
      if(!decodetoken) return res.status(400).send({status: false, msg:"your decode token is invalid"});
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if(!userDetails) return res.status(404).send({status: false, msg:" No such user exit"});
      let putData = await userModel.findOneAndUpdate({_id:userDetails},data,{new:true})
      res.status(200).send({status:true, data: putData});
    }
    catch(err){
      console.log("token error", err)
      res.status(500).send({ message:err.message});
    }
        
}

const postMessage = async function (req, res) {
  let message = req.body.message
  try{
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  
    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
  }
  catch(err){
    console.log("token error", err)
    res.satatus(500).send({ msg: "please check your delete data", error:err });
  }
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.deleteUser = deleteUser
module.exports.putUser = putUser
module.exports.postMessage = postMessage