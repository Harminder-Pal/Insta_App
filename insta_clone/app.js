const express = require("express");
const app = express();
const ProfileRoute = require('./api/routes/Profile');
const UsersRoute = require('./api/routes/Users');
const PostsRoute = require('./api/routes/Posts');
const commentsRoute = require('./api/routes/Comments');
const MessageRoute = require('./api/routes/Messages');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://harminder:hpdk1996@cluster0.yjsxh.mongodb.net/instagramDatabase?retryWrites=true&w=majority');

mongoose.connection.on('error',error=>{
    console.log('connection failed')
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with database successfully')
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/Users',UsersRoute);
app.use('/Posts',PostsRoute);
app.use('/Profile', ProfileRoute);
app.use('/Comments',commentsRoute);
app.use('/Messages',MessageRoute);
app.use((req,res,next)=>{
    res.status(404).json({
        Error:`Bad request`
    })
})

app.use((req, res, next)=>{
    res.status(200).json({
        message:`app is running`
    })
})

module.exports = app;