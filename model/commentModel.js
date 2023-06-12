const mongoose=require("mongoose");

const commentScheme=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})


module.exports= mongoose.model("Comment",commentScheme);