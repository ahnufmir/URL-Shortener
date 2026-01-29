const express = require("express");
const {connectToMongoDB} = require("./config/connection")
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/URL");

//middlewares
app.use(express.json());
app.use("/", urlRoute)

app.listen(PORT, ()=>{console.log("Server is listening")});