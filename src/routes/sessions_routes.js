// To declare sessions routes.

//
const router = require('express').Router();
const sessionsControllers = require('../controllers/sessions');

router
  .route('/sessions')
  .get(sessionsControllers.showLoginForm)
  .post(sessionsControllers.processLogin);
//   .all()
//   .put()
//   .delete();

module.exports = router;
