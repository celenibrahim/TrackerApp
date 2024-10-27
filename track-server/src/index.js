const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
app.use(express.json());
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
const port = 3000;

// MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://celenibo:aslangol@tracker.0zrg3.mongodb.net/?retryWrites=true&w=majority&appName=Tracker";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Basit bir GET route
app.get("/", (req, res) => {
  res.send("MongoDB ile bağlantı başarılı!");
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
