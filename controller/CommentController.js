const Comment=require("../model/commentModel");
const Post=require("../model/postModel");

exports.createComment=async(req,res)=>{
    try{
        // fetch data from request body
        const {post,user,body}=req.body;

        // create a comment object
        const comment=Comment({post,user,body});

        // save the new comment into database
        const savedComment=await comment.save();

        // find the post by ID and add the new comment to its comments array
        // new:true means it return updated documents in updatedPost
        // $push is used to insert in array
        // $pull is used to remove in array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                            .populate("comments") // populate the comments array with comment document
                            .exec();

        res.json({
            post:updatedPost
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}