import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import ArticleList from '../components/ArticleList'
import ArticleEditor from '../components/ArticleEditor'
import SidebarView from '../components/SidebarView'
import {withStyles} from '@material-ui/core/styles';

/**
 * shows an article list, with editing operations
 */
const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {editorOpen: false};

      this.handleClick = this.handleClick.bind(this);
      this.saveChanges = this.saveChanges.bind(this);
   }

   handleClick() {
      // open the editor
      this.setState(state => ({
         editorOpen: true
      }));
   }

   saveChanges() {
      this.setState(state => ({
         editorOpen: false
      }));
   }

   render() {
      const editorOpen = this.state.editorOpen;
      return (
         <Grid container spacing={16} style={{padding: 12}}>
            <Grid item xs={2}>
               <SidebarView>
               </SidebarView>
            </Grid>
            <Grid item xs={10}>
               <Button onClick={this.handleClick}>Share Article</Button>
               <ArticleList>
               </ArticleList>

               <ArticleEditor open={editorOpen} saveChanges={this.saveChanges} loading={false}>
               </ArticleEditor>
            </Grid>
         </Grid>
      )
   }
}

export default withStyles(styles)(Dashboard);
