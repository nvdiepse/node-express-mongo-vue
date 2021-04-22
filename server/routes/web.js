const express = require("express");
const web = new express.Router();
const SiteController = require("../controllers/Admin/SiteController");

web.get("/", SiteController.index);
module.exports = web;
