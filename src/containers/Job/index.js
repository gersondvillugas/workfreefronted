import React, { Component } from "react";
import Header from "../../components/Header/Navbar/index";
import { Link } from "react-router-dom";
class Job extends Component {
  state = {
    title: "",
    description: "",
    context: "",
    budget: "",
    state: "",
    orderDate: "",
  };
  componentDidMount() {
    //importante
    this.fetchProject();
  }
  fetchProject() {
    fetch(`http://127.0.0.1:4000/api/project/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.project);
        // console.log(this.state.users);
        //console.log(" asd "+data)
        this.setState({
          title: data.project.title,
          description: data.project.description,
          context: data.project.context,
          budget: data.project.budget,
          state: data.project.state,
          orderDate: data.project.orderDate,
          _id: data.project._id,
        });
        //  console.log(data.user.fullname);
        //console.log(JSON.parse(localStorage.getItem("USER")).country)
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <br />
        <br />
        <section className="project-view-v3">
          <header>
            <span>{this.state.title}</span>
            <p className="h4">{this.state.orderDate}</p>
          </header>
          <section className="box-common block-project">
            <div className="row is-flex-md-min column">
              <section className="col-md-8 col-lg-9 block-detail">
                <article>
                  <div className="row">
                    <div className="col-xs-6">
                      <h5 className="h4"> sobre este proyecto</h5>
                      <h2 className="hidden">it-programming/data sciences</h2>
                    </div>
                    <div className="col-xs-6">
                      <h4 className="text-success text-right">
                        s/ {this.state.budget}
                      </h4>
                    </div>
                  </div>
                  <div data-text-expand="leer mas">
                    {this.state.description}
                    <br />
                    contexto
                    <br />
                    {this.state.context}
                    se tiene
                    <br />
                    {this.state.state}
                  </div>
                </article>
              </section>
              <aside className="col-md-4 col-lg-3">
                <article className="bock-cta">
                  <Link
                    to={`/job/${this.props.match.params.id}/proposal`}
                    className="btn btn-block btn-lg btn-primary btn-xs-fixed"
                  >
                    Envia una propuesta
                  </Link>
                  <a href="" className="btn btn-block btn-lg btn-primary">
                    Realiza una consulta
                  </a>
                </article>
              </aside>
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
export default Job;
