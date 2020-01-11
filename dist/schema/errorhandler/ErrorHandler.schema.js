"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var ErrorHandlerSchema = new mongoose.Schema({
    route: String,
    method: String,
    dateTime: { type: Date, default: Date.now },
    error: String
});
exports.ErrorHandlerSchema = ErrorHandlerSchema;
//# sourceMappingURL=ErrorHandler.schema.js.map