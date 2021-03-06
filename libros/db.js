var mongoose = require('mongoose');
const conexion = 'mongodb+srv://maxpower:helloworld@cluster0.6di0t.mongodb.net/testmax1?retryWrites=true&w=majority';
mongoose.connect(conexion ,{useNewUrlParser: true, useUnifiedTopology: true});