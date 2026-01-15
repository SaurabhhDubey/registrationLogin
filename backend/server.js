import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/auth.route.js";

const app = express();
dotenv.config();

//app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

await mongoose.connect(MONGO_URI)
.then(()=>console.log("database connected"))
.catch(err=>console.log("error" , err))

app.use("/api/auth" , router);

app.get("/" ,(req , res)=>{res.send("working")});
app.listen(PORT , console.log(`listening on ${PORT}`));

