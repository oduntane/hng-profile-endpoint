var express = require('express');
var path = require('path')

const PORT = process.env.PORT || 3000

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/me', profileRouter);

app.listen(PORT, "0.0.0.0")


// module.exports = app;
