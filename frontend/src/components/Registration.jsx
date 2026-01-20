import { useState } from "react";
import { registerUser } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";


const Registration = () => {

  const navigate = useNavigate();

const [username , setUsername]= useState("");
const [email , setEmail]= useState("");
const [password , setPassword]= useState("");
const [confirmPassword , setconfirmPassword]= useState("");
const [gender , setGender]= useState("");
const [phone , setPhone ]= useState("");
const signup = async()=>{
      if(password!=confirmPassword){
        alert("Password mismatch")
        return
      }}

const handlechange = async (e)=>{
  e.preventDefault();
  const result = await registerUser(username , email , password , phone , gender);
  console.log(result);
  
};




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handlechange}>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name = "username"
              placeholder="Harry Potter"
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="1234567890"
              name="phone"
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Gender
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            name="gender"
            onChange={(e)=>setGender(e.target.value)}
            value={gender}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="confirmPassword"
              onChange={(e)=>setconfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkbox" />
            <span className="text-sm">
              I agree to the Terms & Conditions
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={signup}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>navigate("/login")}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Registration;
