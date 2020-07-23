const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./src/config/passport/passportConfig');
passportConfig(passport);

//

//Settings

app.set('PORT', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

//

//Middlewares

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//

//Routes

app.use(require('./src/routes/trades_routes'));
app.use(require('./src/routes/index_routes'));

//Server running

app.listen(app.get('PORT'), '0.0.0.0', () =>
  console.log(`server running on port ${app.get('PORT')}`),
);
