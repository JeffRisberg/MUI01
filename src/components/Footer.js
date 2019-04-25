import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const styles = {
   root: {
      marginTop: '10px',
      padding: '6px',
      background: '#eee'
   },
};

function Footer(props) {
   const {classes} = props;

   return (
      <div className={classes.root}>
         <Typography>
            MUI01
         </Typography>
      </div>
   );
}

Footer.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
