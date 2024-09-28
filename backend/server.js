const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const path = require("path")
const userRoutesV1 = require("./routes/v1/user.route")
const cardRoutesV1 = require("./routes/v1/card.route")
const { connectDB } = require('./config/db');
const PORT = process.env.PORT || 7001;
const axios = require("axios");
const cors = require("cors");

connectDB();
  
app.use(express.json());
app.use(cors());

app.use('/api/v1/users/', userRoutesV1);
app.use('/api/v1/cards/', cardRoutesV1);

app.get("/", (req, res) => {
    return res.json("App is running----")
    console.log("app is running--")
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
