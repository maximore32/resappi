var mongoose = require('mongoose');
const conexion = "mongodb://localhost:27017/testmax1"
mongoose.connect(conexion ,{useNewUrlParser: true, useUnifiedTopology: true});