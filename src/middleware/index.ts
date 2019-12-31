import * as bodyParser from "body-parser";
import LoggerMiddleware from "./LoggerMiddleware";
import HeadersMiddleware from "./HeadersMiddleware";
import ErrorHandlerMiddleware from "./ErrorHandlerMiddleware";

const middleWareArrayOne = [
  HeadersMiddleware.addHeaders,
  LoggerMiddleware.logTheHit,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
  // ErrorHandlerMiddleware.errorHandler
];

const middleWareArrayTwo = [
  // HeadersMiddleware.addHeaders,
  // LoggerMiddleware.logTheHit,
  // bodyParser.json(),
  // bodyParser.urlencoded({ extended: true })
  ErrorHandlerMiddleware.errorHandler
];


export { middleWareArrayOne,middleWareArrayTwo };
