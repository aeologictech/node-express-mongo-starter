const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/node-demo", { useNewUrlParser: true });

const userRoute = require('./routes/user.js');

app.use('/', userRoute);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app;