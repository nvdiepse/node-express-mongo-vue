import i18n from "../../libs/i18n";
import logger from "../../libs/winston-daily-rotate-file";
import MeetingRepo from "../../repositories/UserRepo";

const getMeeting = async (req, res) => {
    try {
        logger.info(req);
    } catch (err) {
        res.status(500).json(i18n.__("500"));
    }
};

module.exports = {
    getMeeting,
};
