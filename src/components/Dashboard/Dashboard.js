import React, { Component } from 'react';
//import './style.css';
import Projects from './Projects/Projects';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Navbar';



class Dashboar extends Component{

  

    render() {

        
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path="/"  component={Projects} />
                    {/* <Route path="/projects" exact component={Projects} /> */}
                    {/* <Route path="/projects/:slug" component={Projects} /> */}
                </Switch>
            </React.Fragment>
            
        );
    }
}



export default Dashboar;
