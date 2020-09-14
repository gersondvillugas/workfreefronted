import React, { Component } from 'react';
//import './style.css';
//import Products from './index';
import { Route, Switch } from 'react-router-dom';

import { withRouter } from "react-router-dom";
import Ind from './index'
import Postproject from './post-project'
class Postprojectall extends Component{

 

    render() {

        //console.log('Parents');
      //  console.log(this.props);

        return (
            <React.Fragment>
                <Switch>
                    <Route  path="/"    component={Ind} />
                    <Route  path="/post-project-fs/add"  component={Postproject} />

                    {/* <Route path="/products" exact component={Products} />
                    <Route path="/products/:slug" component={Products} /> */}
                </Switch>
            </React.Fragment>
            
        );
    }
}



//export default Worker;
export default withRouter(Postprojectall);
