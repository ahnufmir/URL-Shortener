const express = require("express");
const {connectToMongoDB} = require("./config/connection")
const urlRoute = require("./routes/url");
const cors = require("cors");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/URL");

//middlewares
app.use(cors({
    origin : "http://127.0.0.1:5500"
}))
app.use(express.json());
app.use("/", urlRoute)

app.listen(PORT, ()=>{console.log("Server is listening")});

