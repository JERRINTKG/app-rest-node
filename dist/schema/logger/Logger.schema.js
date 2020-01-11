"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var LoggerSchema = new mongoose.Schema({
    route: String,
    method: String,
    dateTime: { type: Date, default: Date.now },
});
exports.LoggerSchema = LoggerSchema;
//# sourceMappingURL=Logger.schema.js.map