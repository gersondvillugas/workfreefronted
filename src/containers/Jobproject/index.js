import React, { Component } from "react";
import Header from "../../components/Header/Navbar/index";
import { Link } from "react-router-dom";
import axios from "axios";
import Propuesta from './Propuesta/index'
import {
  API_BASE_URL,
  ACCESS_USER_ID,
  ACCESS_TOKEN_NAME,
} from "../../constants/apiContants";
class Jobproject extends Component {
  state = {

   
    detail:"",
    user:localStorage.getItem(ACCESS_USER_ID),
    project:"",
    budget: "",
   _id:"",
    timerequired:"",
    state: "",
    proposals: [],


  };
  componentDidMount() {
    //importante
    this.fetchProject();
  }
  fetchProject() {
    fetch(`http://127.0.0.1:4000/api/project/by/${this.state.user}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.project);
        // console.log(this.state.users);
        //console.log(" asd "+data)
        this.setState({
          title: data.project.title,
          description: data.project.description,
          context: data.project.context,
       //   budget: data.project.budget,
          state: data.project.state,
          country:data.project.country,
          orderDate: data.project.orderDate,
          _id: data.project._id,
        });
        console.log(this.state._id)
        fetch(`http://127.0.0.1:4000/api/proposal/${this.state._id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.proposal);
          this.setState({
            proposals:data.proposal
          })
        });
        //  console.log(data.user.fullname);
        //console.log(JSON.parse(localStorage.getItem("USER")).country)
      });
  }
  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   console.log(name);
  //   console.log(value);
  // };
  // sendDetailsToServer = () => {
  //   if (this.state.detail.length && this.state.timerequired.length) {
  //     //  props.showError(null);
  //     const payload = {
  //       detail: this.state.detail,
  //       timerequired:this.state.timerequired,
       
  //       budget:this.state.budget,
    
  //       user:this.state.user,
  //       project:this.state.project
  //     };
  //     axios
  //       .post("http://127.0.0.1:4000/api/add/proposal", payload)
  //       .then(function (response) {
  //         if (response.status === 200) {
  //           //console.log(response.data.usuario);
  //             alert("propuesta enviada")
  //           //   console.log("usuario:  asd"+response.dat)
  //           //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
  //           //localStorage.setItem(ACCESS_USER_ID, response.data.usuario._id);
             
  //     //      this.redirectToproject();
  //           //props.showError(null)
  //         } else {
  //           //  props.showError("Some error ocurred");
  //           console.log("some error ocurred");
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         console.log("eeeeee");
  //       });
  //   } else {
  //     // props.showError('Please enter valid username and password')
  //     alert("Please enter valid username and password'");
  //   }
  // };
  // redirectToproject = () => {
  //   //this.props.history.push("/add");
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.user) {
  //     this.sendDetailsToServer();
      
  //    // console.log("hola");
  //   } else {
  //     // props.showError('Passwords do not match');
  //     alert("Passwords do not match");
  //   }
  // };


  

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
              {this.state.title}
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
                    <div >{this.state.country}</div>
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
                    Propuestas
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
          {this.state.proposals.map(proposal=><Propuesta
                   key={proposal._id}
                   id={proposal._id}
                   detail={proposal.detail}
                   timerequired={proposal.timerequired}
                //   description={project.description}
                   budget={proposal.budget}
                />)}          
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Jobproject;
