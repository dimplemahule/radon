const express = require('express');
const router = express.Router();
const bloggController = require("../controllers/bloggController");
const authorController = require("../controllers/authorController")


// ======================== blogg API ===============================


router.post("/authors", authorController.createAuthor)
router.post("/blogs", bloggController.createBlog)
router.get("/blogs", bloggController.getBlogs)





module.exports = router;