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

const PATH_STYLES = path.resolve(__dirname, ROOT, 'app/styles');
const PATH_DIST = path.resolve(__dirname, ROOT, 'dist');

app.use('/styles', express.static(PATH_STYLES));
app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
});
