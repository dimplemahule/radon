const authorModel = require("../models/authorModel");
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



  module.exports.createAuthor = createAuthor;