import React, { Component } from "react";
import PropTypes from "prop-types";
import NewItems from "../components/NewItems";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopHeadline from "../components/TopHeadline";
import Carousal from "../components/Carousal";
import NewsList from "../components/NewsList";

export default class DisplayArtical extends Component {
  static defaultProps = {
    country: "in",
    page: 1,
    pageSize: 20,
    category: "general",
    api_key: process.env.REACT_APP_TODAY_NEWS_API_KEY,
  };
  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    api_key: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articals: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&pageSize=${this.props.pageSize}&page=${this.props.page}`;
      const response = await fetch(url);
      const news = await response.json();
      if (news.status === "error") {
        this.setState({ loading: true });
      } else {
        this.setState({
          loading: true,
          articals: news.articles,
          loading: false,
          totalResults: news.totalResults,
        });
      }
    } catch (error) {
      this.setState({ loading: true });
    }
  }
  HandlePreNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.api_key}&pageSize=${
        this.props.pageSize
      }&page=${this.state.page - 1}`;
      const response = await fetch(url);
      const news = await response.json();
      if (news.status === "error") {
        this.setState({ loading: true });
      } else {
        this.setState({
          loading: true,
          articals: news.articles,
          page: this.state.page - 1,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({ loading: true });
    }
  };
  HandleNextNews = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${
          this.props.country
        }&category=${this.props.category}&apiKey=${
          this.props.api_key
        }&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
        const response = await fetch(url);
        const news = await response.json();
        if (news.status === "error") {
          this.setState({ loading: true });
        } else {
          this.setState({
            loading: true,
            articals: news.articles,
            page: this.state.page + 1,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({ loading: true });
      }
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <TopHeadline />
        <div className="right-sidebar">
          <div>
            <Carousal />
          </div>
          <div>
            <NewsList />
          </div>
        </div>
        <hr />
        {this.props.category ? <h3>Category : {this.props.category}</h3> : ""}
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articals.map((item) => {
            return (
              <NewItems
                key={item.url}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                url={item.url}
              />
            );
          })}
          <div>
            <nav
              aria-label="Page navigation example"
              style={{ marginTop: "2rem" }}
            >
              <div className="pagination justify-content-between">
                <button
                  disabled={this.state.page <= 1}
                  className="btn btn-danger"
                  onClick={this.HandlePreNews}
                >
                  Previous
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.HandleNextNews}
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
