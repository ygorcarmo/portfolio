import { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
