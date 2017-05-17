var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(5555, function(){
	console.log('Server up on 5555');
})