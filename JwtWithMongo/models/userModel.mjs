import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('users', userScheme);
export default User;