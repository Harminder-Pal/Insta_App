const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.protect = async (req, res, next) => {
      let token;
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
          ) {
          token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
          return next(
            new AppError('You are not logged in.Please login to get access', 401)
            );
        }
        let decoded;
        try {
          decoded = await promisify(jwt.verify)(
            token,
      process.env.JWT_LOGIN_TOKEN
      );
        } catch (e) {
          return next(new AppError('Please login to get access', 401));
        }

        const freshUser = await User.findById(decoded.id);

        if (!freshUser) {
          return next(new AppError('User does not exist', 401));
        }

        req.user = freshUser;

        next();
      };



const generateToken = (options, secret, expireTime) => {
  return jwt.sign(options, secret, {
    expiresIn: expireTime,
  });
};