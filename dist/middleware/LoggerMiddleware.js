"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_model_1 = require("../model/middleware/Logger.model");
class LoggerMiddleware {
    constructor() {
        this.loggerModel = null;
        this.logTheHit = (req, res, next) => {
            let postData = { route: req.path, method: req.method, dateTime: new Date() };
            this.loggerModel.logTheHit(postData, d => {
                // console.log("Success");
            });
            next();
        };
        this.loggerModel = new Logger_model_1.default();
    }
}
exports.default = new LoggerMiddleware();
//# sourceMappingURL=LoggerMiddleware.js.map