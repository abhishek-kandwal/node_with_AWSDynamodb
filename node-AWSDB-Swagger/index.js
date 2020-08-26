var express = require('express'),
    bodyparser = require('body-parser'),
    expressSwagger = require('express-swagger-generator');

var userRouter = require('./routes/user'),
    moviesRouter = require('./routes/movies'),
    indexRouter =  require('./routes/index');

var app = express();

var expressSwagger = require('express-swagger-generator')(app);
var swaggerOptions = require('./swagger');

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
expressSwagger(swaggerOptions);


app.use('/' ,indexRouter);
app.use('/user', userRouter);
app.use('/movies', moviesRouter);

app.use(function(req,res,next){
    res.send('no path found');
});

module.exports = app;