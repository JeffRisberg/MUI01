import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Editor} from '@tinymce/tinymce-react';

import * as OverlayActions from '../actions/Overlay';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
    },
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
    };

    handleSave = () => {
        console.log('Article Text:', this.state.text, this.state.tags);
        if (this.state.text && this.state.tags) {
            // save
        }
        self.props.overlayClose('save');
    };

    handleCancel = () => {
        const self = this;
        self.props.overlayClose('cancel');
    };

    componentDidMount() {
        console.log('loading data', this.props);
    }

    render() {
        console.log('ArticleEditor', this.props);

        const {state, props} = this;
        const { classes } = props;
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
                                plugins: 'link image code',
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

const mapStateToProps = (state) => {
    console.log('ArticleEditor', state);
    return {...state.overlay};
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({...OverlayActions}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ArticleEditor));