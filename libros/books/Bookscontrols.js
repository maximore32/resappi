var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Importamos como módulo el esquema
var Mov = require('./libro');


// Todas las movies
router.get('/', (req, res) => {
    // Habilitamos CORS para que se pueda obtener la info desde cualquier dominio
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({}, (err, books) =>{
        if (err) return res.status(500).send({"error":"Problemas buscando todas las peliculas"});
        res.status(200).send(books);
    });
});


router.get('/ISBN/:ISBN', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
	Mov.findOne({ ISBN: req.params.ISBN}, (err, book) =>{
        if (err) return res.status(500).send({"error":"Problemas buscando todos los libros"});
        if (!book) return res.status(404).send({"error":"404"});
        res.status(200).send(book);
    });
});

router.get('/titulo/:titulo', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
	Mov.findOne({ Titulo: req.params.titulo}, (err, book) =>{
        if (err) return res.status(500).send({"error":"Problemas buscando todos los libros"});
        if (!book) return res.status(404).send("Libro no encontrado: " + req.params.titulo);
        res.status(200).send(book);
    });
});

router.get('/director/:director', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Autor: req.params.autor}, (err, book) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!book) return res.status(404).send("Libro no encontrada con el Autor: " + req.params.autor);
        res.status(200).send(book);
    });
});


router.get('/actor/:actor', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Editorial: req.params.editorial}, (err, book) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!book) return res.status(404).send("Pelicula no encontrada con el actor: " + req.params.editorial);
        res.status(200).send(book);
    });
});


router.get('/year/:year', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Year: req.params.year}, (err, book) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!book) return res.status(404).send("Libro no encontrado con el año: " + req.params.year);
        res.status(200).send(book);
    });
});

router.get('/pais/:pais', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Pais: req.params.pais}, (err, book) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!book) return res.status(404).send("Libro no encontrado con el año: " + req.params.pais);
        res.status(200).send(book);
    });
});

module.exports = router;