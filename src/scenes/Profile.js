import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';

/**
 * the Profile screen, showing user information and user tags
 */
const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Profile extends Component {

   render() {
      const {classes} = this.props;

      return (
         <div>
            <Card>
               <CardContent>
                  <Typography gutterBottom variant="h4">
                     Your Profile
                  </Typography>
                  <form className={classes.container} noValidate autoComplete="off">
                     <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value="Jack Bauer"
                        margin="normal"
                     />
                     <TextField
                        id="standard-uncontrolled"
                        label="Address Line 1"
                        defaultValue="123 Main Street"
                        className={classes.textField}
                        margin="normal"
                     />
                     <TextField
                        id="standard-uncontrolled"
                        label="Address Line 2"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                     />
                     <TextField
                        id="standard-uncontrolled"
                        label="City or Town"
                        defaultValue="Palo Alto"
                        className={classes.textField}
                        margin="normal"
                     />
                     <TextField
                        id="standard-uncontrolled"
                        label="State"
                        defaultValue="CA"
                        className={classes.textField}
                        margin="normal"
                     />
                  </form>
                  <Typography gutterBottom variant="h4">
                     Your Tags
                  </Typography>
               </CardContent>
            </Card>
         </div>
      )
   }
}

Profile.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
