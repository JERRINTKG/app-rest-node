"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ErrorHandler_schema_1 = require("../../schema/errorhandler/ErrorHandler.schema");
class ErrorHandlerModel {
    constructor() {
        this.errorModel = null;
        this.initModel();
    }
    initModel() {
        this.errorModel = mongoose.model("errors", ErrorHandler_schema_1.ErrorHandlerSchema, "errors");
    }
    logTheError(postData, callback) {
        this.errorModel.create(postData, (err, small) => {
            if (err)
                return console.log(err);
            callback(err);
        });
    }
}
exports.default = ErrorHandlerModel;
//# sourceMappingURL=ErrorHandler.model.js.map