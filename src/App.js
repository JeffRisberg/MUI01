import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Catalog from './scenes/Catalog';
import Dashboard from './scenes/Dashboard';
import Profile from './scenes/Profile';
import Splash from './scenes/Splash'
import UserList from './scenes/UserList';
import {withStyles} from '@material-ui/core/styles';

import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';

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
   typography: {
      useNextVariants: true,
   },
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
   static propTypes = {
      classes: PropTypes.object,
      history: PropTypes.object.isRequired
   };

   state = {
      //  theme: Themes()
   };

   render() {
      const {history, classes} = this.props;

      return (
         <Router history={history}>
            <MuiThemeProvider theme={theme}>
               <Paper className={classes.app}>
                  <Navigation history={history} />
                  <Switch>
                     <Route path="/" exact component={Splash}/>
                     <Route path="/dashboard" component={Dashboard}/>
                     <Route path="/catalog" component={Catalog}/>
                     <Route path="/users" component={UserList}/>
                     <Route path="/profile" component={Profile}/>
                  </Switch>
                  <Footer/>
               </Paper>
            </MuiThemeProvider>
         </Router>
      );
   }
}

export default withStyles(styles)(App);
