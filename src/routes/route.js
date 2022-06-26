const express = require('express');
const router = express.Router();
const bloggController = require("../controllers/bloggController");
const authorController = require("../controllers/authorController")
const middleware = require("../middelewere/auth")
const jwtValidation = require("jsonwebtoken")


// ======================== blogg API ===============================


router.post("/authors", authorController.createAuthor)
router.post("/login", authorController.loginauthor)

router.post("/blogs", bloggController.createBlog)
router.get("/blogs",middleware.jwtValidation, bloggController.getBlogs)
router.put("/blogs/:blogId",middleware.jwtValidation, bloggController.putPublished)
router.delete("/blogs/:blogId",middleware.jwtValidation, bloggController.deleteBlogById)
router.delete("/blogs",middleware.jwtValidation, bloggController.deleteBlogsByQuery)





module.exports = router;