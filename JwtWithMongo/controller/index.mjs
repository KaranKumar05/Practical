import User from '../models/userModel.mjs'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = async (req, res) => {
    const userModel = new User(req.body);
    userModel.password = await bcrypt.hash(userModel.password, 10);
    try {
        const response = await userModel.save();
        response.password = undefined;
        return res.status(200).json({
            message: "User created successfully",
            data: response,
        })
    } catch (err) {
        return res.status(400).json({
            message: "Error",
            error: err,
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid Email/Password",
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Email/Password",
            })
        }
        const tokenObject = {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
        const JwtToken = jwt.sign(tokenObject, process.env.SECRET, {
            expiresIn: "4h"
        });
        res.cookie("token", JwtToken, { httpOnly: true });
        return res.status(200).json({
            JwtToken,
            tokenObject,
            Login: true,
        })
    } catch (err) {
        return res.status(400).json({
            message: "Error",
            error: err,
        })
    }
}

export const profile = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome Authorized User",
    })
}


export const logout = async (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
        success: true,
        message: "Logged Out",
    })
}