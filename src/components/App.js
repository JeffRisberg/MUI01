import React from 'react';
import Footer from './Footer';
import UserList from './UserList';
import SignIn from './SignIn';
import CourseList from './CourseList';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

const App = props => (
    <MuiThemeProvider theme={createMuiTheme()}>
        <Router>
            <Route path='/' component={Navigation} />
        </Router>
        <Router>
            <Switch>
                <Route path="/" exact component={CourseList} />
                <Route path="/registration" component={Signin} />
                <Route path="/settings" component={Settings} />
                <Route path="/users" component={UserList} />
            </Switch>
        </Router>
    </MuiThemeProvider>
);

export default withStyles(styles)(App);
