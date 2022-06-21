
const blogModel = require("../models/bloggModel");
const authorModel = require("../models/authorModel")

//========================CREATE BLOGS===================================

const createBlog = async (req, res) => {
  try {
    let getData = req.body;
    if (Object.keys(getData).length == 0) {
      return res.status(400).send({ status: false, msg: "Data is required to create a Blog" });
    }
    if(!getData.title) return res.status(400).send({ status: false, msg: "Title of book is required" });
    if(!getData.body) return res.status(400).send({ status: false, msg: "Description of book is required" });
    if(!getData.authorid) return res.status(400).send({ status: false, msg: "Author ID is required" });
    if(!getData.category) return res.status(400).send({ status: false, msg: "Category of book is required" });
    
    let getAuthorData = await authorModel.findById(getData.authorid);
    console.log(getAuthorData)
    if (!getAuthorData) return res.status(404).send({ status: false, msg: "No such author exist" });

    let showBlogData = await blogModel.create(getData);
    res.status(201).send({ status: true, data: showBlogData });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
}
//===================================GET DETAILS===================================
const getBlogs = async (req, res) => {
  try {

    let data = req.query

    if (Object.keys(data).length == 0) {
      let getAllBlogs = await blogModel.find({ isDeleted: false, isPublished: true });
      if (!getAllBlogs) return res.status(404).send({ status: false, msg: "No such blog exist" });
      // if (getAllBlogs.length == 0) return res.status(404).send({ status: false, msg: "No such blog exist" });
      return res.status(200).send({ status: true, data: getAllBlogs })
    }

    let getBlogs = await blogModel.find({ $and: [{ $and: [{ isDeleted: false }, { isPublished: true }] }, { $or: [{ authorid: data.authorid }, { category: { $in: [data.category] } }, { tags: { $in: [data.tags] } }, { subcategory: { $in: [data.subcategory] } }] }] });

    if (getBlogs.length == 0) return res.status(200).send({ status: true, msg: "No such blog exist" });
    res.status(200).send({ status: true, data: getBlogs })
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
}


module.exports.getBlogs = getBlogs

module.exports.createBlog = createBlog


  