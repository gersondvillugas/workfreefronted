import React, { Component } from 'react';
//import './style.css';
import Products from './index';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Navbar/index';

import { withRouter } from "react-router-dom";
import Ind from './index'

class Worker extends Component{

 

    render() {

        //console.log('Parents');
      //  console.log(this.props);

        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path="/"  component={Ind} />
                    {/* <Route path="/products" exact component={Products} />
                    <Route path="/products/:slug" component={Products} /> */}
                </Switch>
            </React.Fragment>
            
        );
    }
}



//export default Worker;
export default withRouter(Worker);
