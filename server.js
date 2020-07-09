const express = require('express');
const app = express();
const patch = require('path');
const pug = require('pug');

//Settings

app.set('PORT', process.env.PORT || 3000);
app.set('views', patch.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

//Routes

app.use(require('./src/routes/users_routes'));

//Server running

app.listen(app.get('PORT'), '0.0.0.0', () =>
  console.log(`server running on port ${app.get('PORT')}`)
);
