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

app.use('/', express.static(PATH_PUBLIC));
app.use(express.static(PATH_DIST));

const articleList = [
   {
      "sys": {"id": 1},
      "fields": {
         "title": "How to use React for Applications",
         "description": "Covers updates to React during 2019",
         "author": "Tom Jones",
         "url": "http://www.reactjs.org",
         "image": {"fields": {file: {url: "/015.jpg"}}}
      }
   },
   {
      "sys": {"id": 2},
      "fields": {
         "title": "Using Apache Spark",
         "description": "Scalable machine learning applications",
         "author": "Fred Smith",
         "url": "http://www.tibco.com",
         "image": {"fields": {file: {url: "010.jpg"}}}
      }
   },
   {
      "sys": {"id": 3},
      "fields": {
         "title": "Kubernetes Management at Scale",
         "description": "Allows you to manage a Kubernetes cluster",
         "author": "Peter Woods",
         "url": "http://www.google.com",
         "image": {"fields": {file: {url: "016.jpg"}}}
      }
   },
   {
      "sys": {"id": 4},
      "fields": {
         "title": "ServiceNow application state management",
         "description": "Administration for ServiceNow",
         "author": "James Towns",
         "url": "http://www.aisera.com",
         "image": {"fields": {file: {url: "004.jpg"}}}
      }
   },
   {
      "sys": {"id": 5},
      "fields": {
         "title": "Alphabetic sorting approaches",
         "description": "For performance optimization",
         "author": "Indu Chandrasakar",
         "url": "http://www.quanticmind.com",
         "image": {"fields": {file: {url: "006.jpg"}}}
      }
   },
   {
      "sys": {"id": 6},
      "fields": {
         "title": "Knowledge-based search",
         "description": "Configuration tool administration",
         "author": "Brandon Underhill",
         "url": "http://www.google.com",
         "image": {"fields": {file: {url: "009.jpg"}}}
      }
   }
];

const tagList = [
   'Cycling',
   'Nutrition',
   'Running',
   'Cancer',
   'Dancing',
   'Swimming',
   'Mental Wellbeing',
   'Massage',
   'Yoga',
   'Acupuncture',
   'Bodybuilding',
   'Fitness',
   'Aerobics',
   'Acupressure'
];

app.get('/api/articles/:id', (req, res) => {
   const id = parseInt(req.params.id);
   if (id > 0 && id <= articleList.length) {
      res.send({
         'status': 'ok',
         data: articleList[id - 1]
      });
   } else {
      res.status(404);
      res.send({
         'status': 'missing',
         'data': null
      });
   }
});

app.get('/api/articles', (req, res) => {
   res.send({
      'status': 'ok',
      data: articleList
   });
});

app.get('/api/tags', (req, res) => {
   res.send({
      'status': 'ok',
      data: tagList
   });
});

app.listen(nconf.get('port'), () => {
   console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
});
