import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Splash from './views/Splash'
import Dashboard from './views/Dashboard';
import UserList from './views/UserList';
import {withStyles} from '@material-ui/core/styles';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const styles = {
    root: {
        textAlign: 'center',
        paddingTop: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 500,
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
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

class App extends React.Component {
    state = {
        //  theme: Themes()
    };

    render() {
        console.log("app render");
        return (
            <MuiThemeProvider theme={theme}>
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
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
