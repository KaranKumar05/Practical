import Joi from "joi"; //Library for validation
import jwt from "jsonwebtoken";

export const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).alphanum().required()
    })
    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({ message: "Bad Request", error })
    }
    next()
}

export const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).alphanum().required()
    })
    const { error, value } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({ message: "Bad Request", error })
    }
    next()
}

//Checks is token available || is available token valid
export const tokenValidation = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: "Token is Required" })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        return next()
    } catch (err) {
        return res.status(401).json({ message: "Token is Invalid or Expired", err })
    }
}