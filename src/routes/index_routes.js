const router = require('express').Router();
const indexRoutes = require('../controllers/index');

//

router.route('/').get(indexRoutes.showIndex);

module.exports = router;
