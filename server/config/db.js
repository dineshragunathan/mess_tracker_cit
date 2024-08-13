import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Connected to mongodb");
  } catch (err) {
    console.log("Error : " + err.msg);
    process.exit(1);
  }
};

export default connectDb;