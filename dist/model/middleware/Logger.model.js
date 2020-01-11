"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Logger_schema_1 = require("../../schema/logger/Logger.schema");
class LoggerModel {
    constructor() {
        this.loggerModel = null;
        this.initModel();
    }
    initModel() {
        this.loggerModel = mongoose.model("logger", Logger_schema_1.LoggerSchema, "logger");
    }
    logTheHit(postData, callback) {
        this.loggerModel.create(postData, (err, small) => {
            if (err)
                return console.log(err);
            callback(err);
        });
    }
}
exports.default = LoggerModel;
//# sourceMappingURL=Logger.model.js.map