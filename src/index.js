// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"

import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
  path: './.env' // Make sure the path is correct
});


connectDB();













































// import express from "express"

// const app=express();


// Immediately Invoked Function Expression (IIFE) to connect to the database.
// This ensures the app doesn't start until the DB connection is successful.

// ( async()=>{

//     try{
//         // Attempt to connect to MongoDB.
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//          // Set up a listener for any errors that the Express app might encounter after starting.
//         app.on("error",(error)=>{
//             console.log("EXPRESS APP ERROR ; ",error);
//             throw error;
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`The server is running on port ${process.env.PORT}`);
//         });

//     }catch(error){
//          // Catch errors from the initial database connection attempt.
//         console.error("MONGOB CONNECTION FAILED :",error)
//         process.exit(1);
//     }

// })();


//commented part is approach 1 for db connection just before loading the app , everything in the index.js file