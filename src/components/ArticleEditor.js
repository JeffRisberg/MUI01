import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Editor} from '@tinymce/tinymce-react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';

const styles = {
    root: {
        color: 'white',
        height: 120,
        padding: '0 30px',
    },
};

class ArticleEditor extends Component {

    submitHandler(values) {
        console.log(values);
        const article = {
            ...values,
            text: values.text.trim()
        };
        console.log(article);
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <form onSubmit={this.props.submitHandler}>
                    <Editor name="text"
                        initialValue="<p>Enter your article here</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                        }}
                    />
                    <Button type="submit">Save</Button>
                </form>
            </div>
        );
    }
}

ArticleEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleEditor);
