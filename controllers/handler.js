const URL = require("../models/urlModel");
const shortID = require("shortid");

async function handlerPostURL(req, res) {
  const url = shortID(8);
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "No url" });
  console.log("url : ", url);
  const result = await URL.create({
    shortURL: url,
    redirectURL: body.url,
    visitedHistory: [],
  });
  return res.status(201).json({ msg: "URl created" });
}

async function handleGetURL(req, res) {
  const url = req.params.url;
  console.log(url);
  if (!url) return res.status(400).json({ msg: "No url" });
  const result = await URL.findOneAndUpdate(
    { shortURL : url },
    {
      $push: {
        visitedHistory: {
            timestamp : Date.now()
        },
      },
    },
  );
  return res.redirect(result.redirectURL);
}

module.exports = {
  handlerPostURL,
  handleGetURL
};
