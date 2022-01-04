const express = require("express");
const router = express.Router();

const auth = require('../middlewares/Followers');
const FollowersController = require('../Controllers/Followers');

router.get('/', auth,FollowersController.getMyFunc); 

router.post('/', auth,FollowersController.postFollowerFunc);

module.exports = router;