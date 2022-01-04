const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  message: {
    type: String,
    required: [true, 'Message should not be empty'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seen: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
    },
  ],
});



module.exports =  mongoose.model('Message', MessageSchema);

