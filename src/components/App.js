import React from 'react';
import Footer from './Footer';
import UserList from './UserList';
import SignIn from './SignIn';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

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
        <Button variant="contained" color="primary">
            Hello World
        </Button>
        <Grid>
            <Card>
                Card1
            </Card>
            <Card>
                Card2
            </Card>
            <Icon>
                Icon
            </Icon>
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        </Grid>
        <UserList/>
        <SignIn/>
        <Footer/>
    </div>
);

export default App;
