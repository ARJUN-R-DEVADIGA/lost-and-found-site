require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// const cors = require("cors");

app.use(cors({
  origin: [
    "https://lost-and-found-2.vercel.app"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});

const itemRoutes = require("./routes/itemRoutes");

app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {

    res.send("Backend Running");

});

const PORT = process.env.PORT || 5000;
app.get("/debug", (req, res) => {
    res.json({
        message: "debug route working"
    });
});
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});