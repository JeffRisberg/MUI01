import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        marginTop: "10px",
        padding: "5px",
        background: "#f44"
    },
};

function Footer(props) {
    const {classes} = props;
    const spacing = 16;

    return (
        <div className={classes.root}>
            MUI01
        </div>
    );
}

export default withStyles(styles)(Footer);
