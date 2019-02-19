import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Splash from './scenes/Splash'
import Dashboard from './scenes/Dashboard';
import UserList from './scenes/UserList';
import {withStyles} from '@material-ui/core/styles';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const styles = {
   root: {
      textAlign: 'center',
      paddingTop: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 500,
   },
   app: {
      maxWidth: 1200,
      margin: 'auto'
   },
   card: {
      paddingTop: 40,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
   },
};

const theme = createMuiTheme({
   palette: {
      primary: lightBlue,
      secondary: grey,
      text: {
         primary: '#000',
         secondary: '#888'
      }
   },
   status: {
      danger: 'orange',
   },
});

class App extends Component {
   state = {
      //  theme: Themes()
   };

   render() {
      const {classes} = this.props;

      return (
         <MuiThemeProvider theme={theme}>
            <Paper className={classes.app}>
               <Router>
                  <Route path='/' component={Navigation}/>
               </Router>
               <Router>
                  <Switch>
                     <Route path="/" exact component={Splash}/>
                     <Route path="/dashboard" component={Dashboard}/>
                     <Route path="/users" component={UserList}/>
                  </Switch>
               </Router>
               <Footer/>
            </Paper>
         </MuiThemeProvider>
      );
   }
}

export default withStyles(styles)(App);
