const mongoose = require("mongoose");
const validator = require("validator");

const FollowerSchema  = new mongoose.Schema({
      userId: {
        type: String,
        allowNull: true,
        referenceces: {
          model: 'Profile',
          key: '_Id'
        }
      }, 
      followerId: {
        type: String,
        allowNull: true,
        referenceces: {
          model: 'Profile',
          key: '_Id'
        }
      },
      count: {
        count : 0
      }
})

module.exports = mongoose.model('Followers', FollowerSchema);