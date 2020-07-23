// Passport config file.
const Strategy = require('passport-local');
const User = require('../../models').User;
const errorMessage = require('../../helpers/errorMessage');

//

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  });

  passport.use(
    new Strategy(
      {
        usernameField: 'email',
      },
      async function (email, password, done) {
        try {
          let user = await User.findByEmail(email);
          if (!user)
            return done(null, false, { message: 'Incorrect username.' });
          if (!(await user.comparePassword(password)))
            return done(null, false, { message: 'Incorrect password.' });
          return done(null, user);
        } catch (error) {
          console.log(error);
          //   errorMessage(error, __filename);
        }
      },
    ),
  );
};
