"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User_controller_1 = require("../../controller/user/User.controller");
let router = express.Router();
let UserRoutes = {
    all: router.get("/api/user/all", User_controller_1.default.getAllUsers),
    meta: router.get("/api/user/meta", User_controller_1.default.getUserMeta),
    add: router.post("/api/user/register", User_controller_1.default.registerUser)
};
exports.default = UserRoutes;
//# sourceMappingURL=User.route.js.map