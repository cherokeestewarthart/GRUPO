var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.any('select * from public.user')
        .then(data => {
            var viewState = { title: 'SUCCESS', mydata: data };
            res.render('index', viewState);
        })
        .catch(error => {
            var viewState = { title: 'ERROR', mydata: error };
            res.render('index', viewState);
        })
});

router.post('/', function(req, res, next) {
    res.send(req.body.name);
});

module.exports = router;