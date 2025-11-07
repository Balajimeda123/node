import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://balajimbalaji123_db:balaji%40123@first-mongo.8dmgaim.mongodb.net/"
    );
    console.log(` MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
  }
};

export default dbConnection;
