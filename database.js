const mongoose = require("mongoose");

require("dotenv").config();//jo bhi env file ke and config hai usko yeh load kardeta hai process obj ke andar.
const connectwithdb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
      useNewUrlParser:true, //flags
      useUnifiedTopology:true,
     })
     
   .then(() =>console.log("DB connection sucessesfull."))
    .catch( (error) => {
        console.log("issue in DB connection.");
        console.log(error);
        process.exit(1);
    })
    
};
module.exports = connectwithdb;