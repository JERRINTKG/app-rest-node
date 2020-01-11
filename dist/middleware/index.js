"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const LoggerMiddleware_1 = require("./LoggerMiddleware");
const HeadersMiddleware_1 = require("./HeadersMiddleware");
const ErrorHandlerMiddleware_1 = require("./ErrorHandlerMiddleware");
const middleWareArrayOne = [
    HeadersMiddleware_1.default.addHeaders,
    LoggerMiddleware_1.default.logTheHit,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
    // ErrorHandlerMiddleware.errorHandler
];
exports.middleWareArrayOne = middleWareArrayOne;
const middleWareArrayTwo = [
    // HeadersMiddleware.addHeaders,
    // LoggerMiddleware.logTheHit,
    // bodyParser.json(),
    // bodyParser.urlencoded({ extended: true })
    ErrorHandlerMiddleware_1.default.errorHandler
];
exports.middleWareArrayTwo = middleWareArrayTwo;
//# sourceMappingURL=index.js.map