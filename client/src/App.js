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
    API.getSaved(data=>{
      this.setState({
        savedArticles: data
    })
  })
};

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
        this.setState({ articles: res.data.response.docs.slice(0,4) });
      })
      .catch(err => console.log(err));
  };
  handleArticleChange = (key) =>{
    API.getSaved(data => {
      this.setState({
        savedArticles: data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div id="header" className="jumbotron">
          <h2>New York Times Article Scraper</h2>
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
              type="submit"
              className="input-lg succuess"
            >
              Search
            </button>
          </div>
          <hr />
          <h3>Search Results</h3>
          <ArticleList id="search-results">
            {this.state.articles.map(article=>(<Article title={article.headline.main} date={article.pub_date} url={article.web_url} saved={false} id={null} onSave={this.handleArticleChange}/>))}
          </ArticleList>
          <hr />
          <h3>Saved Articles</h3>
          <ArticleList id="saved-articles">
            {this.state.savedArticles.map(article=>(<Article title={article.title} date={article.date} url={article.url} saved={true} id={article._id} onSave={this.handleArticleChange}/>))}
          </ArticleList>
        </div>
      </div>
    );
  }
}

export default App;
