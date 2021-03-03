var express = require('express');
var app = express();
// Importamos la conexión a la base de datos
var db = require('./db');

const port = process.env.PORT || 8080;

// El archivo que tiene todo el armado de la Rest API
var moviesController = require('./books/Bookscontrols');

// La Rest API queda en /api/
app.use('/api', moviesController);

var port = "8080";

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});