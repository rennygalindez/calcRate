const router = require('express').Router();
const userControllers = require('../controllers/users');

//

router
  .route('/users')
  //   .all() todo
  .get(userControllers.new)
  .post(userControllers.processNew);
//   .put() todo
//   .delete(); todo

module.exports = router;
