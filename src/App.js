import React, { Component } from "react";
import DisplayArtical from "./pages/DisplayArtical.jsx";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <DisplayArtical />
        </div>
      </>
    );
  }
}
