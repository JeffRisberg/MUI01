import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Article from './Article'

class ArticleList extends Component {

    state = {
        articles: [
            {
                "sys": {"id": 1},
                "fields": {
                    "title": "How to use React for Applications",
                    "description": "Covers updates to React during 2018",
                    "author": "Tom Jones",
                    "url": "http://www.reactjs.org",
                    "image": {"fields": {file: {url: "public/015.jpg"}}}
                }
            },
            {
                "sys": {"id": 2},
                "fields": {
                    "title": "Using Apache Spark",
                    "description": "Scalable machine learning applications",
                    "author": "Fred Smith",
                    "url": "http://www.tibco.com",
                    "image": {"fields": {file: {url: "public/017.jpg"}}}
                }
            },
            {
                "sys": {"id": 3},
                "fields": {
                    "title": "Kubernetes management at scale",
                    "description": "Allows you to manage a Kubernetes cluster",
                    "author": "Peter Woods",
                    "url": "http://www.blizzard.com",
                    "image": {"fields": {file: {url: "public/016.jpg"}}}
                }
            }
        ],
        searchString: ''
    };

    render() {
        return (
            <div>
                {this.state.articles ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.articles.map(article => (
                                <Grid key={article.sys.id} item xs={12} sm={6} lg={4} xl={3}>
                                    <Article article={article}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No articles found"}
            </div>
        )
    }
}

export default ArticleList;