const logger = require('../services/logger.service')

module.exports = { log }

async function log(req, res, next) {
    logger.info('Req was made',req.baseUrl, JSON.stringify(req.params), JSON.stringify(req.query))
    next()
}