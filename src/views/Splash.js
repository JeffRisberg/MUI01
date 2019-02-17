import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import SignIn from '../components/SignIn'

/**
 * the welcome screen, with sign-in
 */
class Splash extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Welcome
                        </Typography>
                        <Typography component="p">
                            Online class manager
                        </Typography>
                    </CardContent>
                </Card>
                <SignIn/>
            </div>
        )
    }
}

export default Splash;