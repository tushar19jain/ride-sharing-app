import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password: {
        type:String,
        required:true,
        trim:true, 
    },
    user_phone_number:{
        type:String,
        required:true,
        length:10,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true
    }
},{strict:false}); 
export const user_model = mongoose.models.User || mongoose.model('User',user_schema);