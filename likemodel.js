//import mongoose instance
const mongoose = require("mongoose");

const likeschema = new mongoose.Schema({
    post:{     //konsi post pe like kar rahe ho
        type:mongoose.Schema.Types.ObjectId,        
        ref:"post"                               
      },  
      user:{     //kish user ne like kiya hai
        type:String,
        required:true,
      },
});
module.exports = mongoose.model("like",likeschema);