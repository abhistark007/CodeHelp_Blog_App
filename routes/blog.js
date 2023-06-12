const express=require("express");
const router=express.Router();


// import controllers
const {createComment}=require("../controller/CommentController");
const {createPost, getAllPosts}=require("../controller/PostController");
const {likePost, unlikePost} =require("../controller/LikeController");



// mapping create
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

// export
module.exports=router;