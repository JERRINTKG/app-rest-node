"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
let JobRoutes = {
    details: router.get("/details", (req, res) => {
        res.json({ message: "hooray! welcome to our api!" });
    }),
    add: router.get("/add", (req, res) => {
        res.json({ message: "hooray! welcome to our api!" });
    })
};
exports.default = JobRoutes;
//# sourceMappingURL=Job.route.js.map