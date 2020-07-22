// To declare users routes.

//

const router = require('express').Router();
const usersControllers = require('../controllers/users');

router
  .route('/users')
  .get(usersControllers.showSingupForm)
  .post(usersControllers.processSingup);
//   .all()
//   .put()
//   .delete();

module.exports = router;
