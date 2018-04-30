const express = require("express")
const router = express.Router()
const axios = require("axios")
const APIurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const mongoose = require("mongoose")

const db = mongoose.connect("mongodb://localhost/articles")
const articleSchema = mongoose.Schema({
  title : String,
  date : String,
  url : String
})
var Article = mongoose.model("Article", articleSchema);

router.get("articles", (req, res)=>{
  Article.find((err, articles)=>{
    res.json(articles)
  })
})
router.post("articles", (req,res)=>{
  let newArticle = new Article({
    title : req.params.title,
    date : req.param.date,
    url : req.params.url
  })
  newArticle.save((err,article)=>{
    if(err) return console.error(err)
    res.sendStatus(200)
  })
})

router.delete("articles", (req,res)=>{
  Article.remove({_id: req.params.id})
  res.sendStatus(200)
})

module.exports = router