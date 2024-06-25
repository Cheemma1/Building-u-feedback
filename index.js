const express = require('express');
const cors = require('cors')
const { join } = require("path");
const cookieParser = require('cookie-parser'); 
const fs = require('fs');
const app = express();
const https = require('https');
const port = process.env.PORT || 5001

//////Express MiddleWares//////////////
const corsOptions = {
  origin: "https://buildingu.github.io/Building-u-feedback/",
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cookieParser());


const usersRouter = require('./Routes/User');
const feedbackRouter = require('./Routes/Feedback');
const passwordRouter =  require('./Routes/Password');

app.use('/api/users', usersRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/password', passwordRouter);


app.listen(port, ()=>{
    console.log(`HTTP Server listening on port ${port}`);
})
