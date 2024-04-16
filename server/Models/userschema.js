import mongoose from "mongoose";

const userschema=new mongoose.Schema({
     name:{
        type:String,
        required:true,
        trim:true
    },
     lastname:{
        type:String,
    },
    email:{
    type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
            required:true,
            trim:true,
        },
    phone:{
        type:String,
        required:true,
        
     }
    
});


const user=mongoose.model('user',userschema);

export default user;