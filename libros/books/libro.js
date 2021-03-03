var mongoose = require('mongoose');  
var MoviesSchema  = new mongoose.Schema({  
  ISBN: String,
  Titulo: String,
  Autor: String,
  Pais: String,
  Year: String,
  Editorial: String
});
mongoose.model('libros', MoviesSchema);
// Exportamos como módulo
module.exports = mongoose.model('libros');