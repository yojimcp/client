import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Login from './login/Login';
import Main from './main/Main';

export default (
    <Route path="/" component = {App}>

      <IndexRoute component={Login} />
      <Route path="/login" component ={Login} />
      <Route path="/main" component ={Main} />

    </Route>
);
