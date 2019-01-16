import React from 'react';
import Footer from './Footer';
import Card from 'material-ui/Card';

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
    <div className={props.classes.root}>
        <Button variant="contained" color="primary">
            Hello World
        </Button>
        <Card className={props.classes.card}>
            This is MUI01
            <Footer/>
        </Card>
    </div>
);

export default App;
//export default withRoot(withStyles(styles)(App));
