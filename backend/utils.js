import jwt from 'jsonwebtoken';
import config from './config';

// Generate token
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET
  );
};

// Create Auth Middleware 

