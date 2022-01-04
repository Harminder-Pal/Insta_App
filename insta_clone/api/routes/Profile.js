const express = require("express");
const router = express.Router();

const auth = require('../middlewares/Profile');
const ProfileController = require('../Controllers/Profile');

router.get('/', auth,ProfileController.getMyFunc); 

router.post('/', auth,ProfileController.postMyfun2);

module.exports = router;