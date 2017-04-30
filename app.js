const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
// uncomment this line to enable the seed data endpoint.
//setupController(app);

apiController(app);
app.listen(port);