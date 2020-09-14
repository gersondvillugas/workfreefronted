import React, { Component } from "react";
//import Header from "../../components/Header/index";
import "./style.css";
import axios from "axios";
import { withRouter, Redirect, Link } from "react-router-dom";

import {
  API_BASE_URL,
  ACCESS_USER_ID,
  ACCESS_TOKEN_NAME,
} from "../../constants/apiContants";
class Postprojectfsadd extends Component {
  state = {
    title: "",
    description: "",
    context: "",
    budget: "",
    state: "",
    experience: "",
    user:localStorage.getItem(ACCESS_USER_ID),
    country: JSON.parse(localStorage.getItem("USER")).country,


    users: [],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(name);
    console.log(value);
  };
  sendDetailsToServer = () => {
    if (this.state.title.length && this.state.description.length) {
      //  props.showError(null);
      const payload = {
        title: this.state.title,
        description:this.state.description,
        context:this.state.context,
        budget:this.state.budget,
        state:this.state.state,
        experience: this.state.experience,
        user:this.state.user,
        country:this.state.country
      };
      axios
        .post("http://127.0.0.1:4000/api/add/project", payload)
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data.usuario);
            //   console.log("usuario:  asd"+response.dat)
            //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
            //localStorage.setItem(ACCESS_USER_ID, response.data.usuario._id);
             
      //      this.redirectToproject();
            //props.showError(null)
          } else {
            //  props.showError("Some error ocurred");
            console.log("some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("eeeeee");
        });
    } else {
      // props.showError('Please enter valid username and password')
      alert("Please enter valid username and password'");
    }
  };
  redirectToproject = () => {
    //this.props.history.push("/add");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.user) {
      this.sendDetailsToServer();

      console.log("hola");
    } else {
      // props.showError('Passwords do not match');
      alert("Passwords do not match");
    }
  };


render(){
  return(
    <React.Fragment>
     <section className="addnew">
  <header>
    <div className="container">
      <Link to="/home" className="navbar-brand">
        <img
          src="https://image.freepik.com/free-vector/easy-work-logo_1071-72.jpg"
          height="100"
          alt=""
        />
      </Link>
    </div>
  </header>
  <form 
     onSubmit={this.handleSubmit}

  >
    <p className="h4">explicale a freelancer la idea del desarrollo</p>
    <div className="form-group">
      <span className="col-md-1 col-md-offset-2 text-center">
        Titulo
      </span>

      <div className="col-md-8">
        <input
          className="form-control input-lg"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
        />
      </div>
    </div>
    <div class="form-group">
      <span class="col-md-1 col-md-offset-2 text-center">
        describe con tus palbras el proyecto
      </span>
      <div class="col-md-8">
        <textarea
          class="form-control"
           value={this.state.description}
           onChange={this.handleChange}

          name="description"
          placeholder="Enter your massage for us here. We will get back to you within 2 business days."
          rows="7"
        ></textarea>
      </div>
    </div>
    <div class="form-group">
      <span class="col-md-1 col-md-offset-2 text-center">
        contexto general del proyecto
      </span>
      <div class="col-md-8">
        <textarea
          class="form-control"
          onChange={this.handleChange}

          value={this.state.context} 
          name="context"
          placeholder="Enter your massage for us here. We will get back to you within 2 business days."
          rows="7"
        ></textarea>
      </div>
    </div>

    <div className="form-group">
      <span className="col-md-1 col-md-offset-2 text-center">
        experiencia
      </span>

      <div className="col-md-8">
        <input
          className="form-control input-lg"
          name="experience"
          onChange={this.handleChange}
          value={this.state.experience}
          type="text"
        />
      </div>
    </div>
    <div className="form-group">
      <span className="col-md-1 col-md-offset-2 text-center">
        presupuesto
      </span>
          
      <div className="col-md-8">
        <input
          className="form-control input-lg"
          onChange={this.handleChange}
          name="budget"
          value={this.state.budget}
          type="number"
        />
      </div>
    </div>
    <div className="form-group">
      <span className="col-md-1 col-md-offset-2 text-center">
        estado del proyecto
      </span>

      <div className="col-md-8">
        <input
          className="form-control input-lg"
          name="state"
          onChange={this.handleChange}
          value={this.state.state}
          type="text"
        />
      </div>
    </div>
    <div className="form-group">
      <button type="submit" >publicar proyecto</button>
    </div>
  </form>
</section>       
    </React.Fragment>
  )
}
  
}
export default withRouter(Postprojectfsadd);
