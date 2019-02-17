import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {FormGroup, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from 'react-redux';

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
                open={open}
                keepMounted
                onClose={this.handleCancel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Enter article text
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <form>
                            <FormGroup>
                                <TextField
                                    label='Your Text'
                                    value={state.text || ''}
                                />
                            </FormGroup>
                        </form>
                    </DialogContentText>
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
    console.log('Login', state);
    // authentication
    return { ...state.overlay };
};

const mapDispatchToProps = (dispatch) => (
    //bindActionCreators({ ...AuthenticationActions, ...OverlayActions }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);