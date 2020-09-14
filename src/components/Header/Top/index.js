import React from "react";
import "./style.css";
const Background =
  "https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80";
export default function Top() {
  return (
    <main role="main">
      <div
        className="jumbotron text-white jumbotron-image shadow"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h2 className="mb-4">Jumbotron with background image</h2>
        <p className="mb-4">Hey, check this out.</p>
        <a
          href="https://bootstrapious.com/snippets"
          className="btn btn-primary"
        >
          More Bootstrap Snippets
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              "Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui. "
            </p>
            <p>
              <a href="#" className="btn btn-secondary" role="button">
                value
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              "Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui. "
            </p>
            <p>
              <a href="#" className="btn btn-secondary" role="button">
                value
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              "Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui. "
            </p>
            <p>
              <a href="#" className="btn btn-secondary" role="button">
                value
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
   
  );
}
