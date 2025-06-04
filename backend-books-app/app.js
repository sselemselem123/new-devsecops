const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://taner16:taner123@cluster0.guofsiq.mongodb.net/books-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB bağlantı hatası:"));

db.once("open", function () {
  console.log("MongoDB bağlantısı başarılı.");
});

app.get("/", (req, res) => {
  res.json("Merhaba, bu backend tarafıdır.");
});

app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3033;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
