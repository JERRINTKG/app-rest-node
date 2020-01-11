"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_model_1 = require("../model/middleware/ErrorHandler.model");
class ErrorHandlerMiddleware {
    constructor() {
        this.errorModel = null;
        this.errorHandler = (err, req, res, next) => {
            let postData = {
                route: req.path,
                method: req.method,
                dateTime: new Date(),
                error: err
            };
            this.errorModel.logTheError(postData, d => {
                res.json({ status: false, data: [], message: "process failure" });
            });
        };
        this.errorModel = new ErrorHandler_model_1.default();
    }
}
exports.default = new ErrorHandlerMiddleware();
//# sourceMappingURL=ErrorHandlerMiddleware.js.map