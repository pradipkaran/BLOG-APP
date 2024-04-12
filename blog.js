
const express = require("express");
const router = express.Router();

//import controller
const {dummylink,likePost,unlikePost} =require("../controllers/likecontroller");
const {createComment} =require("../controllers/commentcontroller");
const {createPost,getallPosts} =require("../controllers/postcontroller");


//mapping create
router.get("/dummyroute",dummylink);
router.post("/comment/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getallPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
//export
module.exports = router;
