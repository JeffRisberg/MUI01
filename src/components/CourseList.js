import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Course from '../components/Course'

class CourseList extends Component {

    state = {
        courses: [
            {
                "sys": {"id": 1},
                "fields": {
                    "title": "How to use React for Applications",
                    "description": "Covers updates to React during 2018",
                    "author": "Tom Jones",
                    "url": "http://www.reactjs.org",
                    "courseImage": {"fields": {file: {url: "public/015.jpg"}}}
                }
            },
            {
                "sys": {"id": 2},
                "fields": {
                    "title": "Using Apache Spark",
                    "description": "Scalable machine learning applications",
                    "author": "Fred Smith",
                    "url": "http://www.tibco.com",
                    "courseImage": {"fields": {file: {url: "public/017.jpg"}}}
                }
            },
            {
                "sys": {"id": 3},
                "fields": {
                    "title": "Kubernetes management at scale",
                    "description": "Allows you to manage a Kubernetes cluster",
                    "author": "Peter Woods",
                    "url": "http://www.blizzard.com",
                    "courseImage": {"fields": {file: {url: "public/016.jpg"}}}
                }
            }
        ],
        searchString: ''
    };

    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.courses.map(currentCourse => (
                                <Grid key={currentCourse.sys.id} item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found"}
            </div>
        )
    }
}

export default CourseList;