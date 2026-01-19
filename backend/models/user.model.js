import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required:true,
    },
    email :{
        type : String,
        required:true,
        unique:true,
    },
    phone :{
        type : String,
    },
    password:{
    type : String,
    require : true
    },
    gender:{
        type:String,
        enum:["Male" , "Female" , "Other" ,"male" , "female" , "other"],
    }
});

const User =mongoose.model("User" , userSchema);
export default User;