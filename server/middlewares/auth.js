import logger from "../libs/winston-daily-rotate-file";
let accessLog = (req, res, next) => {
    console.log("running");
    console.log(typeof req);
    next();
};

module.exports = accessLog;
