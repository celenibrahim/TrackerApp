require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

const port = 3000;

// MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://celenibo:aslangol@tracker.0zrg3.mongodb.net/?retryWrites=true&w=majority&appName=Tracker";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Basit bir GET route
app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
