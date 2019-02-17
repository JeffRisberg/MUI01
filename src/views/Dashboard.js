import React, {Component} from 'react'
import ArticleList from '../components/ArticleList'
import Button from '@material-ui/core/Button'

/**
 * shows an article list, with editing operations
 */
class Dashboard extends Component {

    newArticle() {
        // to be filled in
    }

    render() {
        return (
            <div>
                <Button>Post New Article</Button>
                <ArticleList>

                </ArticleList>
            </div>
        )
    }
}

export default Dashboard;