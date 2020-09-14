import React from "react";
import { Link, withRouter } from "react-router-dom";

const Project = (props) => {
  const url = props.match.url === "/" ? "/job" : props.match.url;

  return (
     <Link to={`${url}/${props.id}`}>
      <div class="card bg-primary" style={{ width: "18rem;" }}>
        {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          {/* <p class="card-text">{props.description}</p> */}
          <p class="card-text">{props.country}</p>
          <span class="card-text">${props.budget}</span>
          {/* <li class="list-group-item"> ${props.budget}</li> */}
        
        </div>
   
     
      </div>
    </Link>
  );
};

export default withRouter(Project);
