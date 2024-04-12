//import model
const Post = require("../models/postmodel");
const Comment = require("../models/commentmodel");

//business logic  
exports.createComment = async (req,res)=>{
try{
   
    //if u want to create obj then FETCH data from request ki body.
    const {post,user,body}=req.body; 
    //create a comment object
    const comment = new Comment({post,user,body});
    //save the comment into the DB
    const savedComment = await comment.save();   //insert cmmnt in db
    //find the post by ID , then add the new comment to its comments array.   
    const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comment: savedComment._id}},{new:true})
                    .populate("comment")
                    .exec();
    res.json({
        Post:updatedPost,
    });
}
catch(err){
return res.status(500).json({
    error:"error while creating comment",
});
}
};