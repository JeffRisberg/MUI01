import React from 'react';
import Footer from './Footer';
import UserList from './UserList';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
        </Grid>
        <UserList/>
        <Footer/>
    </div>
);

export default App;
