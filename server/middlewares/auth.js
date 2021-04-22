const logger = require("../libs/winston-daily-rotate-file");
const i18n = require("../libs/i18n");
const { WEB, MOBILE, HEADER_MOBILE } = require("../const/const");
const get_ip = require("ipware")().get_ip;

let accessLog = (req, res, next) => {
    const accessLog = {
        host: req.headers.host,
        connection: req.headers.connection,
        pragma: req.headers.pragma,
        originalUrl: req.originalUrl,
        mobile:
            req.headers["sec-ch-ua-mobile"] === HEADER_MOBILE ? MOBILE : WEB,
        browser: req.headers["sec-ch-ua"],
        ip: get_ip(req),
        status: 401,
    };

    try {
        accessLog.status = 200;

        next();
    } catch (err) {
        logger.info(err);
        res.status(401).json(i18n.__("401"));
        throw err;
    }
};

module.exports = accessLog;
