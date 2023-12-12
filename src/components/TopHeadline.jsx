import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TopHeadline extends Component {
  static defaultProps = {
    api_key: process.env.REACT_APP_TODAY_NEWS_API_KEY,
  };
  static propTypes = {
    api_key: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      TopHeadlineTitle: [],
      loading: false,
    };
  }
  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${this.props.api_key}&pageSize=1`;
      const response = await fetch(url);
      const news = await response.json();
      if (news.status === "error") {
        this.setState({ loading: true });
      } else {
        this.setState({
          loading: true,
          TopHeadlineTitle: news.articles,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({ loading: true });
    }
  }
  render() {
    return (
      <div className="lastest_news">
        <span className="lastest"></span>
        <div className="headline">
          <marquee
            className="maruqeeText"
            scrollamount="4"
            loop={false}
            behavior="scroll"
            direction="left"
          >
            {this.state.TopHeadlineTitle.map(
              (marqueeText) => marqueeText.title
            )}
          </marquee>
        </div>
      </div>
    );
  }
}
