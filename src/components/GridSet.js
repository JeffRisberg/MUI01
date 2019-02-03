import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    }
});

class GridSet extends Component {
    render() {
        const {classes} = this.props;
        const spacing = 16;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={16}>
                        <Grid item xs={12}>
                            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                                <Grid key={0} item>
                                    <Paper style={{background: "green"}} className={classes.paper}/>
                                </Grid>
                                <Grid key={1} item>
                                    <Paper style={{background: "red"}} className={classes.paper}/>
                                </Grid>
                                <Grid key={2} item>
                                    <Paper style={{background: "blue"}} className={classes.paper}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

GridSet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridSet);