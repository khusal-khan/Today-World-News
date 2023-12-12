import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Carousal extends Component {
  constructor() {
    super();
    this.state = {
      newsArtical: [],
    };
  }
  
  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b833739cb5f9466bb81f076134147ab1&pageSize=5`;
      const response = await fetch(url);
      const news = await response.json();
      if (news.status === "error") {
        this.setState({ loading: true });
      } else {
        this.setState({
          loading: true,
          newsArtical: news.articles,
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
        <Carousel>
          {this.state.newsArtical.slice(0, -1).map((item) => {
            return (
              <Carousel.Item key={item.url}>
                <img
                  className="d-block w-100"
                  src={
                    item.urlToImage
                      ? item.urlToImage
                      : "/assets/IMAGE/no-image.png"
                  }
                  alt=""
                />
                <div className="bootm_sadow">
                  <Carousel.Caption>
                    <h3 className="text-truncate">{item.title}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}
