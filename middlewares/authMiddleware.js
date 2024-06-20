import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.js';

const authMiddleware = (roles = []) => (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied, token missing' });

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    console.log(roles.includes(decoded.role), decoded)
    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: 'Access denied, insufficient permissions' });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
