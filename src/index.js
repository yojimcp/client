import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory} from 'react-router';
import {blueGrey300} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Routes from './Routes';

const muiTheme=getMuiTheme({
  palette:{
    textColor:blueGrey300
  },
  appBar:{
    heigth:50
  }
});

const route=(
  <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={hashHistory}>{Routes}</Router>
  </MuiThemeProvider>
);

ReactDOM.render(route, document.getElementById('app'));
