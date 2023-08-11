const express =require('express');
const app=express();
import connectDB from './db/connect';
require('dotenv').config()

//setting the routes

//middlewares




const port = process.env.PORT || 5000;
const start = async(url) =>{
    try{
        await connectDB();
        app.listen(port,console.log(`Server is listening at ${port}...`))
    }
    catch(error){

    }
} 
start();