let express = require('express');
let router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '首页' });
});

router.get('/page', function (req, res, next) {
    res.render('page', { title: 'demo' });
});

module.exports = router;
