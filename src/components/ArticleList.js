import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {queryArticles} from '../actions/articles';
import Article from './Article';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
   root: {}
});

class ArticleList extends Component {
   static propTypes = {
      classes: PropTypes.object.isRequired,
      queryArticles: PropTypes.func,
      articles: PropTypes.array
   };

   state = {
      searchString: ''
   };

   componentDidMount() {
      this.props.queryArticles();
   }

   render() {
      const {classes, articles} = this.props;

      return (
         <div>
            {articles ? (
               <div>
                  <Grid className={classes.root} container style={{padding: 24}}>
                     {articles.map(article => (
                        <Grid key={article.sys.id} item xs={12} sm={6} lg={4} xl={3}>
                           <Article article={article}/>
                        </Grid>
                     ))}
                  </Grid>
               </div>
            ) : 'No articles found'}
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   articles: state.app.articles.data,
   status: {
      isFetching: state.app.articles.isFetching,
      ...state.app.appErrors,
   },
});

export default connect(
   mapStateToProps,
   {queryArticles}
)(withStyles(styles)(ArticleList));
