import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ThumbupIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import GroupIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
   root: {},
   actionButton: {
      background: '#AAF',
      padding: '4px'
   }
});

class Article extends Component {
   static propTypes = {
      classes: PropTypes.object.isRequired,
      article: PropTypes.object
   };

   render() {
      const {classes, article} = this.props;

      return (
         <div>
            {article ? (
               <Card>
                  <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                             image={article.fields.image.fields.file.url}
                             title={article.fields.title}
                  />
                  <CardContent>
                     <Typography gutterBottom>
                        <b>{article.fields.title}</b>
                     </Typography>
                     <Typography>
                        {article.fields.description}
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" color="primary" href={article.fields.url} target="_blank">
                        Go To Article
                     </Button>
                     <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                        <ThumbupIcon/>
                     </IconButton>
                     <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                        <GroupIcon/>
                     </IconButton>
                     <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                        <CommentIcon/>
                     </IconButton>
                     <IconButton className={classes.actionButton} color="inherit" aria-label="Menu">
                        <ShareIcon/>
                     </IconButton>
                  </CardActions>
               </Card>
            ) : null}
         </div>
      );
   }
}

export default withStyles(styles)(Article);
