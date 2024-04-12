//function define 1st then then go to route then import then map.
const Post = require("../models/postmodel");
const Like = require("../models/likemodel");

//like a post
exports.likePost = async (req,res)=>{
    try{
        const {post,user} = req.body;
        const like = new Like({post,user,});
        const savedLike = await like.save();
        //update the post  collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {like:savedLike._id}},{new:true}).populate("like").exec();
        res.json({
            post:updatedPost,
        });

    }
    catch(error){
        return res.status(400).json({
            error:"error while liking post",
           });
        
    }
}
//unlike a post
exports.unlikePost = async(req,res)=>{
    try{
       const {post,like} =req.body;
      
       const deletedLike = await Like.findOneAndDelete({post:post , _id:like}); 
       const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{like:deletedLike._id}},{new:true});
       res.json({
        post:updatedPost,
       });
    }
    catch(error){
        return res.status(400).json({
            error:"error while unliking post",
           });
    }
}


exports.dummylink = (req,res) =>{
    res.send("This is my Dummy page");
};