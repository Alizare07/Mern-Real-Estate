import { timeStamp } from "console"
import mongoose  from "mongoose"

const userSchima = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
       
    },

},{timeStamp:true});

 const User = mongoose.model("User", userSchima)
 
 export default User;
