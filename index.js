const express = require("express");
const {connectToMongoDB} = require("./config/connection")

const urlRoute = require("./routes/url");
const secondUrlRoute = require("./routes/secondurl");
const userUrl = require("./routes/user")

const cors = require("cors");
const path = require('path')
const cookieParser = require('cookie-parser');
const restrictToLoggedinUsers = require("./middleware/auth");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/URL");

//middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.use("/url", secondUrlRoute);
app.use("/user", userUrl);
app.use("/", restrictToLoggedinUsers, urlRoute)

app.listen(PORT, ()=>{console.log("Server is listening")});

