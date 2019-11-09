// requiring packages
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

// requiring routes
var indexRoutes = require('./routes/index');

// defaults
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// routes
app.use('/', indexRoutes);

// deployment
app.listen(3000, 'localhost', function() {
	console.log('The Server Has Started!');
});
