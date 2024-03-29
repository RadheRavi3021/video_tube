
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();
/*
function connectDB() {

}
connectDB()
*/
/*

;( async ()=>{
    try{
        await mongoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
    }catch(error){
        console.error("Error: ",error)
        throw error
    }
})();
*/

import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path:'./env'
})

connectDB()
.then(() =>
{
    app.listen(process.env.PORT || 8080,() =>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.error("Mongo DB connect failed: ",error)
})