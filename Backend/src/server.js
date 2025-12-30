const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: "https://purple-merit-assignment-chi.vercel.app",
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors({
    origin: "https://purple-merit-assignment-chi.vercel.app",
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});


app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>
    console.log(`Server running on port ${PORT}`)
);
