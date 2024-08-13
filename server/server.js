import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connectDb();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
