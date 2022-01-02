import './App.css';
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { Navabr } from './components/Navabr';
import { Landing } from './components/Landing';
import {Login} from './components/auth/Login';
import {Register} from  './components/auth/Register'

export const App = () => {
  return (
    <Router>
      <Fragment>
        <Navabr />
        <Route exact path='/' component={Landing} />
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </Switch>
         
      </Fragment>

    </Router>

  )
}