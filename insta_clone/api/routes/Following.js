const express = require("express");
const router = express.Router();

const auth = require('../middlewares/Followers');
const FollowingController = require('../Controllers/Followers');

router.get('/', auth,FollowingController.getFunc); 

router.post('/', auth,FollowingController.postFunc);

module.exports = router;