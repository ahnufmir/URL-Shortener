const mongoose = require("mongoose");
const { stringify } = require("uuid");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default : "Normal"
    },
  },
  { timestamps: true },
);

const userUrl = new mongoose.model("user", schema);

module.exports = userUrl;
