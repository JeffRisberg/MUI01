import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import SignIn from '../components/SignIn'
import { withStyles } from '@material-ui/core/styles';

/**
 * the Profile screen, with sign-in
 */
const styles = (theme) => ({
    grid: {
        height: '50px',
    }
});

class Profile extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Welcome
                        </Typography>
                        <Typography component="p">
                            Article manager
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Profile);
