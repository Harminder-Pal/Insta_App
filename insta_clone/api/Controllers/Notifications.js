const mongoose = require("mongoose"); 
const Notification = require('../model/Notifications');

exports.postFun = (/^find/, function (next)  {
    Notification.find().populate('user post');
  
    next();
  });