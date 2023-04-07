const apiError = require('../error/apiError');

module.exports = (err, req, res, next) => {
    if(err instanceof apiError) {
        return res.status(err.status).send(err.msg)
    }
    return res.status(500).send('unpredictable error!');
}