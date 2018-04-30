import axios from "axios";
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
export default {
  getSaved: function() {
    console.log("sending articles!!")
    let k = axios.get("/api/articles");
    console.log(k)
    return k
  },
  search: function(query, byear=1800, eyear=3000) {
    return axios.get(url, {params: {q:query, begin_date:byear+"0101", end_date:eyear+"1231", fl:"pub_date, headline, web_url", "api-key":"4b04c58bc3024b7684263e2bdc7cfde6"}})
  }
};
