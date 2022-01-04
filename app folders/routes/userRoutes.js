const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const {
  login,
  myProfile,
  protect,
  signUpWeb,
} = require('../controllers/authController');

router.route('/me').get(protect, myProfile);

router.post(
  '/login',
  [
    check('email', 'Please enter valid email address').isEmail(),
    check('password', 'Password should be minimum of 8 characters')
      .not()
      .isEmpty(),
  ],
  login
);

router.post(
  '/signup',
  [
    check('email', 'Please enter valid email address').isEmail(),

    check('password', 'Password should be minimum of 8 characters')
      .not()
      .isEmpty()
      .isLength({ min: 8 }),
  ],
  signUpWeb
);

module.exports = router;