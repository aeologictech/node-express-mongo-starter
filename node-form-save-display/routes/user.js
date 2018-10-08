var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/User.js');


router.get('/', function (req, res) {
    //res.send('Hello World!')

    User.find(function (err, userData) {
        if (err) return next(err);

        res.render('index', {'userData' : userData} );
    });
})


router.post('/', function (req, res) {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
        User.find(function (err, userData) {
            if (err) return next(err);

            res.render('index', {'userData' : userData} );
        });
})
    .catch(err => {
        res.status(400).send("Unable to save to database");
});
})


module.exports = router;