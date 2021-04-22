const i18n = require("../../libs/i18n");
const logger = require("../../libs/winston-daily-rotate-file");
const MeetingRepo = require("../../repositories/UserRepo");

const getMeeting = async (req, res) => {
    try {
        logger.info(req);
    } catch (err) {
        logger.info(err);
        res.status(500).json(i18n.__("500"));
    }
};

module.exports = {
    getMeeting,
};
