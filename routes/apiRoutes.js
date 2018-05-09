const mongoose = require('mongoose')
const dburl = process.env.dburl

const articleSchema = new mongoose.Schema({
  title: String,
  date: String,
  url: String
})
var Article = mongoose.model('Article', articleSchema)
mongoose.set('debug', true)
mongoose.connect(dburl)
const db = mongoose.connection
db.once('open', () => console.log('connected!'))

module.exports = function (app) {
  app.get('/api/articles', function (req, res) {
    Article.find({}, function (err, articles) {
      if (err) res.sendStatus(500)
      res.json(articles)
    })
  })

  app.post('/api/articles', (req, res) => {
    let newArticle = new Article({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url
    })
    newArticle.save().then(res.sendStatus(200))
  })

  app.delete('/api/articles/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, () => {
      console.log('deleting...')
    })
    res.sendStatus(200)
  })
}
