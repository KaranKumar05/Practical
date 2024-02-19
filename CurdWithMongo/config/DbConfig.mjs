import mongoose from "mongoose";

mongoose.connect(process.env.Mongo_Url);

const connection = mongoose.connection

connection.on("error", () => {
    console.log("Error while connecting to database");
});

connection.on("connected", () => {
    console.log("Connected to database");
});
export default connection;