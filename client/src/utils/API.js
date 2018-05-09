import axios from "axios";
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
export default {
  getSaved: function(cb) {
    console.log("sending articles!!")
    axios.get("/api/articles").then(
      function(response){
      cb(response.data)
    })
  },
  search: function(query, byear=1800, eyear=3000) {
    return axios.get(url, {params: {q:query, begin_date:byear+"0101", end_date:eyear+"1231", fl:"pub_date, headline, web_url", "api-key":process.env.nytkey}})
  },
  save: function(article) {
    console.log("saving article!!")
    axios.post("/api/articles", {title:article.title,date:article.date,url:article.url}).then(
      function(response){
        console.log(response)
      }
    )
  },
  unsave: function (articleID) {
    console.log("unsaving article!!")
    axios.delete(`/api/articles/${articleID}`).then(
      function (response) {
        console.log(response)
      }
    )
  }
};
