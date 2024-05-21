import React, { Component } from 'react';
import NewsItems from './NewsItems';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed9b1d28af3644cda53f8d85664c1abf&page=${page}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  handelPrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.fetchNews);
  };

  handelNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 10)) {
      this.setState({ page: this.state.page + 1 }, this.fetchNews);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((Element) => {
            return (
              <div className="col-md-4" key={Element.url}>
                <NewsItems
                  title={Element ? Element.title.slice(0, 45) : ""}
                  description={Element.description ? Element.description.slice(0, 60) : ""}
                  imageUrl={Element.urlToImage}
                  newsUrl={Element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handelPrevClick}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={this.handelNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
