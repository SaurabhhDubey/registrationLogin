import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/AuthApi.js";


const Login = () => {
  const navigate = useNavigate();

const [email , setEmail]= useState("");
const [password , setPassword]= useState("");

const handleChange = async(e)=>{e.prevenDefault();
  const result = await loginUser(email , password);
  console.log(result);
}




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleChange}>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name = "email"
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name = "password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

         

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline"
          onClick={()=>navigate("/")}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
