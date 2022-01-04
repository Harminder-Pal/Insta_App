const mongoose = require("mongoose");
const validator = require("validator");

const FollowingSchema  = new mongoose.Schema({
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        referenceces: {
          model: 'Profile',
          key: '_Id'
        }
      }, 
      followingId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        referenceces: {
          model: 'Profile',
          key: '_Id'
        }
      }
})

module.exports = mongoose.model(Following, FollowingSchema);