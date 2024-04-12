const express = require("express");
const app = express();

require("dotenv").config();//load hogai
const PORT = process.env.PORT || 4000;

//Need middleware to parse json request ke body se becz without parser it give error.
app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1",blog);

//connect to the Database
const connectwithdb = require("./config/database");
connectwithdb();

//start server
app.listen (PORT,()=>{
    console.log(`server started succesfully at ${PORT}`);
})

//default routes define
app.get("/",(req,res) =>{
    res.send(`<h1>THIS IS HOME PAGE</h1>`);  
})