import express from "express";
const web = new express.Router();
import SiteController from "../controllers/Admin/SiteController";

web.get("/", SiteController.index);
module.exports = web;
