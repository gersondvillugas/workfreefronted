import React, { Component } from "react";
import Header from "../../components/Header/index";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section class="py-5">
          <div class="container">
            <h1 class="font-weight-light">Half Page Image Slider</h1>
            <p class="lead">
              The background images for the slider are set directly in the HTML
              using inline CSS. The images in this snippet are from{" "}
              <a href="https://unsplash.com">Unsplash</a>!
            </p>
          </div>
        </section>

        <footer className="container">
          <p>© Company 2017-2018</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
