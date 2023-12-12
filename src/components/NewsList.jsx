import React, { Component } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsList extends Component {
  static defaultProps = {
    api_key: process.env.REACT_APP_TODAY_NEWS_API_KEY,
  };
  static propTypes = {
    api_key: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      newsArticalList: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b833739cb5f9466bb81f076134147ab1&pageSize=5&page=2`;
      const response = await fetch(url);
      const news = await response.json();
      if (news.status === "error") {
        this.setState({ loading: true });
      } else {
        this.setState({
          loading: true,
          newsArticalList: news.articles,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({ loading: true });
    }
  }
  render() {
    return (
      <>
        <div className="list-group">
          <h4 className="heading">LASTEST NEWS</h4>
          {this.state.loading && <Spinner />}
          {this.state.newsArticalList.map((item) => {
            return (
              <a
                href={item.url}
                key={item.url}
                target="_blank"
                className="list-group-item list-group-item-action mb-3"
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1 text-truncate">
                    {item.title ? item.title : "no title"}
                  </h5>
                </div>
                <p className="mb-1 text-truncate">
                  {item.description ? item.description : "no description"}
                </p>
                <small>
                  {new Date(
                    item.publishedAt ? item.publishedAt : new Date()
                  ).toDateString() + " ago"}
                </small>
              </a>
            );
          })}
        </div>
      </>
    );
  }
}
