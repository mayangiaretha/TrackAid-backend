import jwt from 'jsonwebtoken';
const { TOKEN_SECRET } = process.env;
const verifiedToken = (req, res, next) => {
  const token = req.headers['access-token'];
  if (!token) {
    return res
      .status(401)
      .json({ message: 'A token is required for authentication' });
  }
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);
    req.user = decoded;
  } catch (error) {
    return res.status(400).json({ message: 'invalid Token' });
  }
  return next();
};
export default verifiedToken;