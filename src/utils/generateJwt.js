import jwt from 'jsonwebtoken';

export const generateJwt = (body) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(body, process.env.JWT_SECRET);
};
