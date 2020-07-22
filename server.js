const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
//Settings

app.set('PORT', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

//Middlewares
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'src', 'public')));

//Routes

app.use(require('./src/routes/trades_routes'));
app.use(require('./src/routes/index_routes'));



//Server running

app.listen(app.get('PORT'), '0.0.0.0', () =>
  console.log(`server running on port ${app.get('PORT')}`),
);
