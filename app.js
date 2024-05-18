import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/",(req,res,next)=>{
    res.send("<h1>HI</h1>");
});

mongoose.connect(
    `mongodb+srv://hariharan0033:${process.env.MONGODB_PASSWORD}@cluster0.ii8zwve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(()=>{
    app.listen((5000),()=>{
        console.log("Server is running");
        console.log("Connected to DB");
        console.log("http://localhost:5000");
    })
}).catch((error)=>{
    console.log(error);
})
