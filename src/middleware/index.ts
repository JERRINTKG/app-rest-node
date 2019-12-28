import * as bodyParser from "body-parser";
import LoggerMiddleware from "./LoggerMiddleware";
import HeadersMiddleware from "./HeadersMiddleware";
// import ErrorHandlerMiddleware from "./ErrorHandlerMiddleware";

const middleWareArray = [
  HeadersMiddleware.addHeaders,
  LoggerMiddleware.logTheHit,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  // ErrorHandlerMiddleware.errorHandler
];

export default middleWareArray;