import React, { Component } from 'react';
import './App.css';
import API from "./utils/API.js"
import {ArticleList, Article} from "./components/Article"

class App extends Component {
  state = {
    articles : [],
    query : "",
    savedArticles : []
  }
  componentDidMount = event => {
    this.setState({savedArticles : API.getSaved()})
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.query)
      .then(res => {
        console.log(res.data);
        this.setState({ articles: res.data.response.docs });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <div id="header" className="jumbotron">
          New York Times Article Scraper
        </div>
        <div className="container">
          <div>
            <input
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder="Search For an article"
            />
            <button
              onClick={this.handleFormSubmit}
              type="success"
              className="input-lg"
            >
              Search
            </button>
          </div>
          <ArticleList id="search-results">
            {this.state.articles.map(article=>(<Article title={article.headline.main} date={article.pub_date} url={article.web_url}/>))}
          </ArticleList>
          <ArticleList id="saved-articles">
            {this.state.savedArticles.map(article=>(<Article title={article.title} date={article.date} url={article.url}/>))}
          </ArticleList>
        </div>
      </div>
    );
  }
}

export default App;
