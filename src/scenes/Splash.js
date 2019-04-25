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
                  <Typography gutterBottom variant="h4">
                     Welcome
                  </Typography>
                  <Typography variant="h4">
                     Article manager
                  </Typography>
                  <SignIn/>
               </CardContent>
            </Card>
         </div>
      )
   }
}

export default withStyles(styles)(Splash);
