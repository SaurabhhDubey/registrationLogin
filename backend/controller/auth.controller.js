import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    try {
        const { username, email, password, phone, gender } = req.body;
        if (!username || !email || !password || !phone || !gender) {
            res.status(400).json({ message: "all fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "user already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword, phone, gender });
        res.status(201).json({ message: "user registered successfully" }, user);

    }
    catch (error) {
        res.status(401).json({ message: "register error :", error });
    };

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }
        const userCheck = await User.findOne({ email });
        if (!userCheck) { return res.status(400).json({ message: "user not registered" }) };
        const isMatch = await bcrypt.compare(password, userCheck.password);
        if (!isMatch) { return res.status(401).json({ message: "invalid password" }) };
        const token = jwt.sign({ id: userCheck._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({ message: "login successfully", token });
    }

    catch (error) {
        res.status(401).json({ message: "login error", error: error.message });
    }
}

export { register , login };