const router = require('express').Router();
const userControllers = require('../controllers/trades');

//

router
  .route('/trades')
  //   .all() todo
  .get(userControllers.new)
  .post(userControllers.processNew);
//   .put() todo
//   .delete(); todo

module.exports = router;
