var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var viewState = { title: 'DINGDONG' };
    res.render('index', viewState);
});

module.exports = router;