import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import SignIn from '../components/SignIn'
import {withStyles} from '@material-ui/core/styles';

/**
 * the welcome screen, with sign-in
 */
const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Splash extends Component {

   render() {
      return (
         <div>
            <Card>
               <CardContent>
                  <Typography gutterBottom component="h2">
                     Welcome
                  </Typography>
                  <Typography component="p">
                     Article manager
                  </Typography>
               </CardContent>
            </Card>
            <SignIn/>
         </div>
      )
   }
}

export default withStyles(styles)(Splash);
