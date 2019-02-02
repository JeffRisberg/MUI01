import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        marginTop: "10px",
        background: "#eee"
    },
};

function Footer(props) {
    const {classes} = props;

    return (
        <div style={{marginTop: "10px", background: "#eee"}}>
            The Risberg Family
        </div>
    );
}

export default withStyles(styles)(Footer);
