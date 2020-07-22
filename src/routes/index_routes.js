const router = require('express').Router();
const indexRoutes = require('../controllers/index');

//

router.route('/').get(indexRoutes.showIndex);
router.route('/tests').get(indexRoutes.test);

module.exports = router;
