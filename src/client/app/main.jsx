'use strict'
// require('../js/firebaseScript.js')
import App from './App.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css');

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Link } from 'react-router'

import LoginUser from './LoginUser.jsx'
import NotFound from './NotFound.jsx'
import CreateUser from './CreateUser.jsx'
import Profile from './Profile.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={LoginUser} />
      <Route path='create-user' component={CreateUser}/>
      {/*<Route path='/user/:userId/profile' component={Profile}/>This will be once we actually have users*/}
      <Route path='/user/profile' component={Profile}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('container'))


