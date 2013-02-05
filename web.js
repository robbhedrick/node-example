var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://dbuser:user4now@ds031877.mongolab.com:31877/robbhedrick-test'; 

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('users', function(er, collection) {
    collection.insert({'name': 'dick seta'}, {safe: true}, function(er,rs) {
    });
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
