import React, { Component } from "react";
import Project from "./Project";
class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers() {
    fetch(`http://127.0.0.1:4000/api/project`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ projects: data.message });
        console.log(this.state.projects);
        //console.log(" asd "+data)

        //  console.log(data.user.fullname);
        // console.log(JSON.parse(localStorage.getItem("USER")).country)
      });
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="row row-condensed">
              <div className="col-xs-6">
                <div className="user-info">
                  <div className="user-wrapper">
                    <a href="">logo</a>
                    <span>
                      {JSON.parse(localStorage.getItem("USER")).fullname}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 text-right">
                <a href="link" className="btn btn-primary">
                  Busca trabajo
                </a>
              </div>
            </div>
            <div className="row row-condensed">
              <div className="col-xs-6">
                <h4>0.00</h4>
                <p className="item-data">Saldo actual</p>
              </div>
              <div className="col-xs-6">
                <h4>0</h4>
                <p>proyectos en curso</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <section>
              <h3>Aqui tienes otros projectos que te pueden interesar</h3>
              <div>

                {this.state.projects.map(project=><Project
                   key={project._id}
                   id={project._id}
                   title={project.title}
                   country={project.country}
                   description={project.description}
                   budget={project.budget}
                />)}
              </div>
            
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
