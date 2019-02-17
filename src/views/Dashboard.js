import React, {Component} from 'react'
import ArticleList from '../components/ArticleList'
import ArticleEditor from '../components/ArticleEditor'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

/**
 * shows an article list, with editing operations
 */
const styles = (theme) => ({
    grid: {
        height: '500px',
    }
});

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.newArticle = this.newArticle.bind(this);
    }

    newArticle() {
        console.log("newArticle");

        // open the editor

    }

    render() {
        return (
            <div>
                <Button onClick={this.newArticle}>Post New Article</Button>
                <ArticleList>
                </ArticleList>

                <ArticleEditor open={false} loading={false}>
                </ArticleEditor>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);