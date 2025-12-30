const { createServer } = require("http");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("../routes/auth.routes");
const adminRoutes = require("../routes/admin.routes");
const userRoutes = require("../routes/user.routes");
const connectDB = require("../config/db");

dotenv.config();
connectDB();

const app = express();


app.use(express.json());


const allowedOrigin = "https://purple-merit-assignment-chi.vercel.app";
app.use(cors({
  origin: allowedOrigin,
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.options("*", cors());


app.get("/", (req, res) => res.send("API is running"));
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);


module.exports = app;
