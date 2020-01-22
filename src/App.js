import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Instructions from './containers/Instructions/Instructions.js'

class App extends Component {
  render () {
    return (
        <div className="App">
        <Instructions/>
        <NavLink 
        to="/courses/" 
        style={{textAlign: 'center',
                margin: "20px",
                padding: "10px",
                display: "inline-block",
                textDecoration: 'none'}}
          activeStyle={{color:"red"}}>Courses</NavLink>
        <NavLink 
        to="/users/"
        style={{textAlign: 'center',
                margin: "20px",
                padding: "10px",
                display: "inline-block",
                textDecoration: 'none'}}
          activeStyle={{color:"red"}}>Users</NavLink>
        <Switch>
          <Route path="/courses/" component={Courses}/>
          <Route path="/users/" component={Users}/>
          <Redirect from="/all-courses/" to="/courses"/>
          <Route>
          <h1 style={{textAlign: 'center'}}>404: Page not found</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
