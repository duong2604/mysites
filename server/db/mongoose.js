import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "jobify_v2",
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Failed to connect to mongoDB");
  }
};

export default connectToMongoDB;
