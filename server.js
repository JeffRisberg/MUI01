/**
 * Serves the application to the browser
 */
var path = require('path');
var express = require('express');
var nconf = require('nconf');
var app = express();

const ROOT = './';
const defaultConfig = path.resolve(__dirname, ROOT, 'config/default.json');

nconf.argv().env().file({file: defaultConfig}).defaults({ENV: 'development'});

const PATH_DIST = path.resolve(__dirname, ROOT, 'dist');
const PATH_PUBLIC = path.resolve(__dirname, ROOT, 'public');

app.use('/public', express.static(PATH_PUBLIC));
app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.get('/api/articles', (req, res) => {
    res.send({
        data:
            [
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
            ]
    });
});

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
});
