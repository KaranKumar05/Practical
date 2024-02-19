import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const User = mongoose.model("users", userSchema);

export default User;
