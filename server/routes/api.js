const express = require("express");
const api = new express.Router();
const MeetingController = require("../controllers/Api/v1/MeetingController");

// express.application.prefix = express.Router.prefix = function(path, middleware, configure) {
//     configure(router);
//     this.use(path, middleware, router);
//     return router;
// }

// router.prefix('/user', authMiddleware, async function (user) {
//     user.route('/details').get(function(req, res) {
//         res.status(201).send('Hello this is my personal details')
//     }); //also you can use controller method if you have any
// });

api.get("/meeting/get-meetings", MeetingController.getMeeting);

module.exports = api;
