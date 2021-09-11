const express = require ('express');
const app = express();

const port = 3000;

const main = require('./routes/main.js');
const about = require('./routes/about.js');

app.use(express.static('public'))

app.use('/',main);
app.use('/about', about);

app.listen(port, () => console.log('Servidor corriendo en '+ port));
