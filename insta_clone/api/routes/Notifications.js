const express = require("express");
const router = express.Router();

const auth = require('../middlewares/Notifications');
const NotificationController = require('../Controllers/Notifications');

router.post('/', auth,NotificationController.postFun);

module.exports = router;