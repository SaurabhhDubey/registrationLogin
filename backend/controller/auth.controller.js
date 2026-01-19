import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const  register = async (req , res)=>{
try{
    const {username , email , password , phone , gender}=req.body;
    if (!username|| !email || !password || !phone || !gender){
        res.status(400).json({message:"all fields are required"});
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        res.status(400).json({message:"user already exists"});
    }
    const hashedPassword = await bcrypt.hash(password ,10);
    const user = await User.create({username , email , password:hashedPassword , phone , gender});
    res.status(201).json({message:"user registered successfully"},user);

}
catch(error){
    res.status(401).json({message:"register error :" , error});
};

}

export  {register};