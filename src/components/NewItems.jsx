import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class NewItems extends Component {
  static defaultProps = {
    title: "",
    description: "",
    urlToImage: "/assets/IMAGE/no-image.png",
    url:""
  };
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    url:PropTypes.string
  };
  render() {
    return (
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              this.props.urlToImage
                ? this.props.urlToImage
                : "/assets/IMAGE/no-image.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <Link to={this.props.url} className="card_title">
              {this.props.title ? this.props.title : " no title"}
            </Link>
            <p className="card-text text-truncate">
              {this.props.description
                ? this.props.description
                : " no description"}
            </p>
            <Link to={this.props.url} target="_blank" className="btn btn-primary">
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
