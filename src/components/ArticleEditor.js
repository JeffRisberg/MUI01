import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {fetchArticle} from '../actions/articles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Editor} from '@tinymce/tinymce-react';

import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
   root: {},
   dialogText: {
      color: "#000"
   }
});

class ArticleEditor extends Component {
   state = {
      text: 'For the way you live',
      tags: 'acupuncture'
   };

   static propTypes = {
      open: PropTypes.bool,
      loading: PropTypes.bool,
      saveChanges: PropTypes.func
   };

   handleSave = () => {
      console.log('Article Text:', this.state.text, this.state.tags);
      if (this.state.text && this.state.tags) {
         // save
      }
      this.props.saveChanges();
   };

   handleCancel = () => {
      const self = this;
      this.props.saveChanges();
   };

   render() {
      const {state, props} = this;
      const {classes} = props;
      const {open, loading} = props;

      return (
         <Dialog
            fullWidth={true}
            open={open}
            keepMounted
            onClose={this.handleCancel}
            aria-labelledby="edit-dialog-title"
            aria-describedby="edit-dialog-description"
         >
            <DialogTitle id="edit-dialog-title">
               Create New Article
            </DialogTitle>
            <DialogContent>
               <DialogContentText className={classes.dialogText}>
                  Enter article text:
               </DialogContentText>
               <Editor name="text"
                       initialValue={state.text}
                       init={{
                          branding: false,
                          menubar: false,
                          plugins: 'lists link image code',
                          toolbar: 'undo redo | bold italic underline | bullist numlist | alignleft aligncenter alignright | code'
                       }}
               />
               <DialogContentText className={classes.dialogText}>
                  Enter tags:
               </DialogContentText>
               <TextField name="tags" value={state.tags} fullWidth>
               </TextField>
            </DialogContent>
            <DialogActions>
               <Button onClick={this.handleSave} color="primary" disabled={loading}>
                  Save
               </Button>
               <Button onClick={this.handleCancel} color="primary" disabled={loading}>
                  Cancel
               </Button>
            </DialogActions>
         </Dialog>
      );
   }
}

const mapStateToProps = state => ({
   initialValues: state.app.articles.data,
   status: {
      isFetching: state.app.articles.isFetching,
      ...state.app.appErrors,
   },
});

const mapDispatchToProps = dispatch => ({
   fetchArticle: (id) => {
      dispatch(fetchArticle(id));
   },
   submitHandler: (values) => {
      const event = {
         ...values,
         text: values.text.trim(),
         time: values.time
      };
      dispatch(saveArticle(event));
   }
});

export default connect(
   mapStateToProps, mapDispatchToProps
)(withStyles(styles)(ArticleEditor));
