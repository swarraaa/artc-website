const express =require('express');
const app=express();
const connectDB=require('./db/connect');
require('dotenv').config();
const student= require('./models/form');
const cors = require('cors');

//setting the routes
const routers=require('./routes/routes')

//middlewares
app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/register', routers);



const port = process.env.PORT || 5000;
const start = async(url) =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen((port),()=>{
            console.log(`Server is listening at ${port}...`)
        });
    }
    catch(err){
        console.log(err)
    }
} 
start();