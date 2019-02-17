import React, {Component} from 'react'
import ArticleList from '../components/ArticleList'
import ArticleEditor from '../components/ArticleEditor'
import Button from '@material-ui/core/Button'

/**
 * shows an article list, with editing operations
 */
class Dashboard extends Component {

    newArticle() {
        // open the editor

    }

    render() {
        return (
            <div>
                <Button>Post New Article</Button>
                <ArticleList>
                </ArticleList>

                <ArticleEditor open={true} loading={false}>
                </ArticleEditor>
            </div>
        )
    }
}

export default Dashboard;