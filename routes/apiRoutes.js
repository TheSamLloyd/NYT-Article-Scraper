const express = require("express")
const router = express.Router()
const APIurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const mongoose = require("mongoose")



const articleSchema = new mongoose.Schema({
  title : String,
  date : String,
  url : String
})
var Article = mongoose.model("Article", articleSchema);

router.get("articles", (req, res)=>{
  mongoose.connect("mongodb://localhost/articles")
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once("connect", ()=>{
    Article.find({}, (err, articles)=>{
      console.log(articles)
      res.json(articles)
    })
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