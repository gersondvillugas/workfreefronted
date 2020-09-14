import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import {
  API_BASE_URL,
  ACCESS_TOKEN_NAME,
  ACCESS_USER_ID,
} from "../../constants/apiContants";
import { withRouter } from "react-router-dom";

//import "./style.css";
class User extends Component {
  state = {
    fullname: "",
    lema: "",
    aparece: "",
    actividad: "Progrmacion y tecnologia",
    type: "Freelancer",
    _id: "",
    users: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(name);
    console.log(value);
  };

  fetchUsers() {
    fetch(
      `http://localhost:4000/api/user/${localStorage.getItem(ACCESS_USER_ID)}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
        //console.log(" asd "+data)
        this.setState({
          fullname: data.user.fullname,
          lema: data.user.lema,
          type: data.user.type,
          actividad: data.user.actividad,
          _id: data.user._id,
        });
      //  console.log(data.user.fullname);
        //console.log(JSON.parse(localStorage.getItem("USER")).country)
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/api/user/${this.state._id}`, {
      method: "PUT",
      body: JSON.stringify({
        fullname: this.state.fullname,
        lema: this.state.lema,
        aparece: this.state.aparece,
        type: this.state.type,
        actividad:this.state.actividad
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log("handlesumit");
  //  console.log("tipo:   " + this.state.type);
    console.log("actividad:  "+this.state.actividad)
    this.redirectToproject()
  };
  redirectToproject = () => {
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <br />
          <br />
          <h1>Edit Profile</h1>
          <hr />
          <div class="row">
            {/* <!-- left column --> */}
            <div class="col-md-3">
              <div class="text-center">
                <img
                  src="//placehold.it/100"
                  class="avatar img-circle"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>

                <input type="file" class="form-control" />
              </div>
            </div>

            {/* <!-- edit form column --> */}
            <div class="col-md-9 personal-info">
              <div class="alert alert-info alert-dismissable">
                <a class="panel-close close" data-dismiss="alert">
                  ×
                </a>
                <i class="fa fa-coffee"></i>
                This is an <strong>.alert</strong>. Use this to show important
                messages to the user.
              </div>
              <h3>Personal info</h3>

              <form
                className="form-horizontal"
                
                onSubmit={this.handleSubmit}
              >
                <div class="form-group">
                  <label class="col-lg-3 control-label">Fullname:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.fullname}
                      name="fullname"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Lema:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.lema}
                      name="lema"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Aparece como :</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      value={this.state.aparece}
                      onChange={this.handleChange}
                      name="aparece"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-lg-3 control-label">
                    Tipo de profesional:
                  </label>
                  <div class="col-lg-8">
                    <div class="ui-select">
                      <select
                        class="form-control"
                        onChange={this.handleChange}
                        value={this.state.type}
                        name="type"
                      >
                        <option value="Freelancer">Freelancer</option>
                        <option value="Agencia">Agencia</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">
                    Actividad profesional:
                  </label>
                  <div class="col-lg-8">
                    <div class="ui-select">
                      <select 
                         class="form-control"
                         onChange={this.handleChange}
                         value={this.state.actividad}
                         name="actividad"
                      >
                        <option value="Progrmacion y tecnologia">
                          Progrmacion y tecnologia
                        </option>
                        <option value="Diseño y multimedia">Diseño y multimedia</option>
                        <option value="Redaccion y tradducion">Redaccion y tradducion</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit">enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default User;
