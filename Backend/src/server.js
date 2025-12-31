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

app.use(cors({
  origin: [
    'https://purple-merit-assignment-chi.vercel.app',
    'http://localhost:3000', 
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['set-cookie']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.options("*", cors());


app.get("/", (req, res) => res.send("API is running"));
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);


module.exports = app;
