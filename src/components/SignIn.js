import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
};

class SignIn extends Component {

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value="Frodo Baggins"
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="Address"
                    defaultValue="The Shire"
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
