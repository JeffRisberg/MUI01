import React from 'react';
import Footer from './Footer';
import UserList from './UserList';
import SignIn from './SignIn';
import CourseList from './CourseList';
import {withStyles} from '@material-ui/core/styles';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';

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
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Route path='/' component={Navigation}/>
                </Router>
                <Router>
                    <Switch>
                        <Route path="/" exact component={CourseList}/>
                        <Route path="/registration" component={SignIn}/>
                        <Route path="/users" component={UserList}/>
                    </Switch>
                </Router>
                <Footer/>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
