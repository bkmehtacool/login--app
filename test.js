var express = require('express');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 8080;
var session = require('express-session');
var app = express();
app.listen(port);

app.use(cookieParser());
app.use(session({
     secret: 'keyboard cat',
     resave: true,
     saveUninitialized: true,
}));

app.use('/',function(req,res){
     res.send("this ti cool");
     console.log(req.cookies);
     console.log("==============================");
     console.log(req.session);

});

console.log("go to port no. : " + port);
