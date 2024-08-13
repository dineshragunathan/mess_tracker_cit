import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

// Register a new user

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    //Salting password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: name,
      email: email,
      password: hashedPassword,
      isAdmin: false,
    });

    await newUser.save();

    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 * 2 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    console.log("User registered : ", name);
  } catch (err) {
    console.error("Error authController.js : " + err.message);
    res.status(500).send("Server Error");
  }
};

// Login logic

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    const existingUser = await User.findOne({email});
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 * 2 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    console.log("Logged in as : " + existingUser.username);
  } catch (err) {
    console.error("Error authController.js : " + err.message);
    res.status(500).send("Server Error");
  }
};
