import React from 'react';
import Footer from './Footer';
import UserList from './UserList';
import SignIn from './SignIn';
import CourseList from './CourseList';
import { withStyles } from '@material-ui/core/styles';

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
    <div>
        <UserList/>
        <CourseList />
        <SignIn/>
        <Footer/>
    </div>
);

export default withStyles(styles)(App);
