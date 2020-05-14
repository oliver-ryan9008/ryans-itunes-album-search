import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
require('typeface-yeseva-one');

const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'typeface-yeseva-one'
  },
  palette: {
    background: {
      default: '#222222'
    },
    text: {
      primary: '#ffffff'
    },
  }
});

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={ themeDark }>
        <CssBaseline />
        <main>
          <Navbar />
          <Switch>
              <Route path='/' component={ Home } exact />
          </Switch>
          </main>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
