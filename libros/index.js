var express = require('express');
var app = express();
// Importamos la conexión a la base de datos
var db = require('./db');

// El archivo que tiene todo el armado de la Rest API
var moviesController = require('./books/Bookscontrols');

// La Rest API queda en /api/
app.use('/api', moviesController);

const port = process.env.PORT || 8080;

app.listen(port);