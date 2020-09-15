import React from "react";
import { Link } from "react-router-dom";
import {
  API_BASE_URL,
  ACCESS_TOKEN_NAME,
  ACCESS_USER_ID,
} from "../../../constants/apiContants";
export default function Navbar() {
  let guestAccount =    <ul className="nav navbar-nav navbar-right">
  <li>
    <Link to="/login">
      <span className="glyphicon glyphicon-user"></span> Registro 
    </Link>
  </li>
  <li>
    <Link to="/signup">
      <span className="glyphicon glyphicon-log-in"></span> Ingresa
    </Link>
  </li>
</ul>;
if(localStorage.getItem(ACCESS_USER_ID)){
  guestAccount=<ul className="nav navbar-nav navbar-right">
  <li>
    <Link to="/login">
      <span className="glyphicon glyphicon-user"></span> Registro 
    </Link>
  </li>
  <li>
    <Link to="" onClick={()=>logout()}>
      <span className="glyphicon glyphicon-log-in"></span> Logout
    </Link>
  </li>
</ul>;
}
const logout=()=>{
   localStorage.clear()
}
// if(this.props.auth.isAuthenticated){
// guestAccount = <ul className="Dropdown Account">
//   <li><Link to="/orders"><i className="far fa-clipboard"></i>&nbsp;&nbsp;<span>Orders</span></Link></li>
//   <li><Link to="" onClick={() => this.props.logout()}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;<span>Logout</span></Link></li>
// </ul>;
// }
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            WORKFREE
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/home">Home</Link>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              Page 1 <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/propuestas">Propuestas</Link>
              </li>
              {/* <li>
                <a href="#">Page 1-2</a>
              </li>
              <li>
                <a href="#">Page 1-3</a>
              </li> */}
            </ul>
          </li>
          <li>
            <Link to="/dashboard">Proyectos</Link>
          </li>
        </ul>
       <div >
        <ul className="TopMenu">
          <li className="MenuItem">

          <Link to="/account">{localStorage.getItem(ACCESS_USER_ID) ? JSON.parse(localStorage.getItem("USER")).fullname: 'My Account'}</Link>

         {guestAccount}
         </li>
        </ul>
       </div>
      </div>      
    </nav>
  );
}
