const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
//const auth = require("../middelewere/auth")
//const userController = require("./userController")
const userModel = require("../models/userModel")

//=====================Post (Create data )========================

const createUser = async function (req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
  };

  //=========================loginUser Sign Up=======================

  const loginUser = async function (req, res){
    let userName = req.body.email_Id;
    let password = req.body.password;
    let user = await userModel.findOne({email_Id:userName, password:password});
    if(!user) return res.send({status: false, msg:"username & password is not corerct",});
    let token = jwt.sign({userId: user._id.toString(),batch:"Radon", organization:"FunctionUp"}, "Function-Up radon");
    res.setHeader("x-auth-token", token);
    res.send({status:true, token: token});
  };

  //========================Get user verify the data=======================

  const getUserData = async function (req, res){

        // let token = req.headers["x-auth-token"];
        // if(!token) return res.send({status:false, msg:"token must be preset"});
        // let decodetoken = jwt.verify(token, "Function-Up radon");
        // if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.send({status: false, msg:" No such user exit"});
        res.send({status:true, data: userDetails});

  }












//========================Delete the perticular isDeleted:true===========

const deleteUser = async function(req, res){
   // let userId = req.params.userId;
    let token = req.headers["x-auth-token"];
        
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.send({status: false, msg:" No such user exit"});
        let deleteData = await userModel.findOneAndUpdate({_id:userDetails},{$set:{isDeleted:true}},{new:true})
        res.send({status:true, data: deleteData});

}

//===============================update user puth the data in body section and update in database=======
const putUser = async function(req, res){
    let data = req.body
    let token = req.headers["x-auth-token"];
        if(!token) return res.send({status:false, msg:"token must be preset"});
        let decodetoken = jwt.verify(token, "Function-Up radon");
        if(!decodetoken) return res.send({status: false, msg:"your decode token is invalid"});
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if(!userDetails) return res.send({status: false, msg:" No such user exit"});
        let putData = await userModel.findOneAndUpdate({_id:userDetails},data,{new:true})
        res.send({status:true, data: putData});
}

const postMessage = async function (req, res) {
  let message = req.body.message
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})
  let decodedToken = jwt.verify(token, 'Function-Up radon')

  if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  
  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //return the updated user document
  return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.deleteUser = deleteUser
module.exports.putUser = putUser
module.exports.postMessage = postMessage