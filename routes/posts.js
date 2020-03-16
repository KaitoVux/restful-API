const express = require("express");
const router = express.Router();
const postController = require("../controller/posts.controller")

//GET ALL
router.get("/",postController.getAllPost);
// GET BY ID
router.get("/:postId",postController.getById);
// CREATE
router.post("/",postController.create);
// DELETE
router.delete("/:postId",postController.delete);

// UPDATE
router.patch("/:postId",postController.update);

module.exports = router;
