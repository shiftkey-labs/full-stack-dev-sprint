import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || "SKFullStackAppSecretKey";

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res
      .status(201)
      .send({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "24h",
    });
    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Exclude password from the result
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function updateUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password: hashedPassword },
      { new: true }
    ).select("-password");
    res
      .status(200)
      .send({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
