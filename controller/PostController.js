const Comment=require("../model/commentModel");
const Post=require("../model/postModel");
const Like=require("../model/likeModel");

exports.createPost=async(req,res)=>{
    try{
        // fetch data from request body
        const {title,body,user}=req.body;

        // create a post object
        const post=Post({title,body,user});

        // save the new post into database
        const savedPost=await post.save();

        
        res.json({
            post:savedPost
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}


exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}