import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import ArticleList from '../components/ArticleList'
import ArticleEditor from '../components/ArticleEditor'
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
    }

    handleClick() {
        console.log("newArticle");

        // open the editor
        this.setState(state => ({
            editorOpen: !state.editorOpen
        }));
    }

    render() {
        const editorOpen = this.state.editorOpen;
        return (
            <div>
                <Button onClick={this.handleClick}>Post Article</Button>
                <ArticleList>
                </ArticleList>

                <ArticleEditor open={editorOpen} loading={false}>
                </ArticleEditor>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);