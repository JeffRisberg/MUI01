import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Editor} from '@tinymce/tinymce-react';

import * as OverlayActions from '../actions/Overlay';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ArticleEditor extends Component {
    state = {
        text: 'Hello this is an article',
        tags: '123456'
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
        self.props.overlayClose('login');
    };

    handleCancel = () => {
        const self = this;
        self.props.overlayClose('login');
    };

    componentDidMount() {
        console.log('Check automation', this.props);
    }

    render() {
        console.log('ArticleEditor,', this.props);

        const self = this, {state, props} = this;
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
                    Enter article text
                </DialogTitle>
                <DialogContent>
                    <Editor name="text"
                            initialValue="<p>Enter your article here</p>"
                            init={{
                                plugins: 'link image code',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);