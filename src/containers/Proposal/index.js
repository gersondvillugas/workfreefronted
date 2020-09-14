import React, { Component } from "react";
//import './style.css';
//import Products from './index';
import { Route, Switch } from "react-router-dom";

import { withRouter } from "react-router-dom";
import Header from "../../../src/components/Header/Navbar";
import { Link } from "react-router-dom";
class Proposal extends Component {
  render() {
    //console.log('Parents');
    //  console.log(this.props);

    return (
      <React.Fragment>
        <Header />
        <br />
        <br />
        <br />
        <div>
          <div>
            <h1 className="title">
              web service
              <span className="project-upsell-icons"></span>
            </h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="row">
                  <div className="col-sm-4 col-md-3">
                    <div className="img img-circle">
                      <img src="" title="juan" alt="" />
                    </div>
                    <div>country</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 text-center">
              <ul className="nav nav-tab">
                <li className="col-md-6 col-sm-6 activate">
                  <a href="" className="tab" btn-primary>
                    Realizar propuesta
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <form action="">
              <div className="row">
                <div className="col-md-9">
                  <div>
                    <h2 className="h3">Propuesta</h2>
                    <p>
                      Esta es tu postulación para el proyecto y tu lugar para
                      lucirte. Cuanto más completo esté tu primer mensaje, más
                      posibilidades tendrás de destacarte. Sigue las buenas
                      prácticas para orientarte.
                    </p>
                    <p></p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">detalles de la propuesta</label>
                    <br />
                    <textarea name="" id="" cols="100" rows="10"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      cuanto tiempo necesitas para cumplir{" "}
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="wk-submit-block">
                    <input
                      type="submit"
                      value="enviar propuesta"
                      className="btn btn-primary btn-lg btn-xs-block"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

//export default Worker;
export default withRouter(Proposal);
