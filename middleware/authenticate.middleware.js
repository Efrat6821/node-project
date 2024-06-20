const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }
    try {
      const tokenKey = process.env.TOKEN_KEY || '';
      console.log('TOKEN_KEY:', tokenKey); 
      const tokenNew = token.split(' ')[1];
      console.log(token);
      console.log(tokenNew);
      const decoded = jwt.verify(tokenNew, tokenKey);
      console.log(decoded);
      req.user = decoded;
      next();
    } catch (err) {
      console.error('Token verification failed:', err); 
      return res.status(401).send('Invalid Token');
    }
};

const checkAdminRole = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).send('Access Denied: User is not an admin.');
    }
};

const checkUserRole = (req, res, next) => {
    if (req.user && req.user.role === 'user') {
        next();
    } else {
        return res.status(403).send('Access Denied:  is not an user.');
    }
};

module.exports = {
    authenticateToken,
    checkAdminRole,
    checkUserRole,
};
