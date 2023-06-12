const Post=require("../model/postModel");
const Like=require("../model/likeModel");

exports.likePost=async(req,res)=>{
    try{
        const {post,user}=req.body;
        const like=new Like({post,user});
        const savedLike=await like.save();

        const updatedPosts=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec();

        res.json({
            posts:updatedPosts
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}

exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        const updatedPosts=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            posts:updatedPosts
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}