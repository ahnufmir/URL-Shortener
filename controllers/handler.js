const URL = require("../models/urlModel");
const shortID = require("shortid");

async function handlerPostURL(req, res) {
  const url = shortID(8);
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "No url" });
  console.log("url : ", url);
  const check = await URL.findOne({redirectURL : body.url});
  if(check){
    console.log("Duplicate Found");
    return res.render('home', {
      foundId : check.shortURL
    });
  }
  const result = await URL.create({
    shortURL: url,
    redirectURL: body.url,
    visitedHistory: [],
  });
  return res.render('home', {
    id : url
  })
  //return res.status(201).json({ msg: `Your url : http://localhost:8000/${url}` });
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
            timestamp : new Date()
        },
      },
    },
  );
  return res.redirect(result.redirectURL);
}

async function handleGetURLForSecond(req,res) {
  const allURLs = await URL.find({});
  return res.render('home', {
    url : allURLs
  })
}

module.exports = {
  handlerPostURL,
  handleGetURL,
  handleGetURLForSecond
};
