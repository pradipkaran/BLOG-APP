//import mongoose instance
const mongoose = require("mongoose");
//route handler
const commentschema = new mongoose.Schema({
  post:{     //konsi post pe cmmnt kar rahe ho
    type:mongoose.Schema.Types.ObjectId,        
    ref:"post"                               
  },  
  user:{     //kish user ne cmmnt kiya hai
    type:String,
    required:true,
  },
  body:{     //kya comment kiya hai
    type:String,
    required:true,
  },
  
});  
module.exports = mongoose.model("comment",commentschema);//commentschema ko comment nam se export kardiya.