//import mongoose instance
const mongoose = require("mongoose");

//route handler
const postschema = new mongoose.Schema({
    title:{   //kya title hai post ka
      type:String,
      required:true,
    },
    body:{   //kya content hai post ka
        type:String,
        required:true,
    },
    like:[{    //kitne like hain aur konse konse
        type:mongoose.Schema.Types.ObjectId,
        ref:"like",
    }],
    comment:[{    //kitne cmnt hai
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }],
});
module.exports = mongoose.model("post",postschema);
