var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.db.any('select * from public.user')
        .then(data => {
            var viewState = { title: 'SUCCESS', mydata: data };
            res.render('index', viewState);
        })
        .catch(error => {
            var viewState = { title: 'ERROR', mydata: error };
            res.render('index', viewState);
        })
});

module.exports = router;