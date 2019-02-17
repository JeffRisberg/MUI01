import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import ThumbupIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import GroupIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
    },
    actionButton: {
        background: "#AAF"
    }
});

const Article = (props) => {
    const { classes } = props;

    return(
        <div>
            { props.article ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                               image={props.article.fields.image.fields.file.url}
                               title={props.article.fields.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.article.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.article.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.article.fields.url} target="_blank">
                            Go To Course
                        </Button>
                        <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                            <ThumbupIcon />
                        </IconButton>
                        <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                            <GroupIcon />
                        </IconButton>
                        <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                            <CommentIcon />
                        </IconButton>
                        <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ): null }
        </div>
    )
};

export default withStyles(styles)(Article);