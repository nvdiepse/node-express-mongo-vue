const winston = require("winston");
require("winston-daily-rotate-file");
let transport = new winston.transports.DailyRotateFile({
    filename: "storage/log/log-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
});

let logger = winston.createLogger({
    transports: [transport],
});

module.exports = logger;
