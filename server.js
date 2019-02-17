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

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
});
