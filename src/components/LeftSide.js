import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        //color: theme.palette.text.secondary,
    }
}));

function LeftSide() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(null);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Section 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul>
                        <li>200 counts</li>
                        <li>100 links</li>
                        <li>50 likes</li>
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Section 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul>
                        <li>200 counts</li>
                        <li>100 links</li>
                        <li>50 likes</li>
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Section 3</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul>
                        <li>200 counts</li>
                        <li>100 links</li>
                        <li>50 likes</li>
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Setion 4</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul>
                        <li>200 counts</li>
                        <li>100 links</li>
                        <li>50 likes</li>
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default LeftSide;
