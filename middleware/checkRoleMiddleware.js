const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).send('Not authorized!');
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded.isAdmin) {
            return res.status(403).send('Forbidden!');
        }
        req.user = decoded
        next();
    } catch (e) {
        res.status(401).send('Not authorized!');
    }
}