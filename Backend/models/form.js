const mongoose = require('express')

const formSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    branch:{
        type: String,
        required: true,
        trim:true
    },
    year:{
        type: String,
        required: true,
        trim: true
    }
})