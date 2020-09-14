//import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Home from './containers/Home/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/containers/Login/index'
import Signup from '../src/containers/Signup/index'
import Postprojectfs from '../src/containers/Post-project-fs/post-project-fs'
import Postproject from '../src/containers/Post-project-fs/post-project'
import Job from '../src/containers/Job/index'
import Proposal from '../src/containers/Proposal/index'

import Signupw from '../src/containers/Signup/signup'
import React, {useState} from 'react';
import Worker from   '../src/components/worker/worker'
import Dashboard from '../src/components/Dashboard/Dashboard'
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
        <Switch> 
          <Route  exact  path="/companies" component={Worker}/>
          <Route path="/login" component={Login} />
          <Route  exact path="/signup" component={Signup} />
          <Route   path="/signup/w"  showError={updateErrorMessage}  component={Signupw} />
   
          <Route exact path="/post-project-fs" component={Postprojectfs} />
          <Route  path="/post-project-fs/add"  component={Postproject} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/job/:id" component={Job}/>
          <Route path="/job/:id/proposal" component={Proposal}/>

          {/* <Route path="/cpanel" component={ControlPanel} /> */}
          {/* <Route path="/products/:category/:slug" component={ProductDetails} /> */}
           {/* <Route path="/products"  component={Shop} /> */}
          {/* <PrivateRoute path="/cart" component={Cart} /> */}
          {/* <PrivateRoute path="/place-order" component={PlaceOrder} /> */}
          {/* <PrivateRoute path="/thank-you" component={ThankYou} /> */}
          {/* <PrivateRoute path="/orders" component={Orders} /> */}
          <Route path="/"  component={Home} />
          
        </Switch>
        
      
    </div>
  </Router>
  );
}

export default App;
