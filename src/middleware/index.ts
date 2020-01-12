import * as bodyParser from "body-parser";
import LoggerMiddleware from "./LoggerMiddleware";
import HeadersMiddleware from "./HeadersMiddleware";
import ErrorHandlerMiddleware from "./ErrorHandlerMiddleware";
// import SwggerMiddleware from "./SwaggerMiddleware";

const middleWareArrayOne = [
  HeadersMiddleware.addHeaders,
  LoggerMiddleware.logTheHit,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  // SwggerMiddleware.addSwagger
];

const middleWareArrayTwo = [
  // HeadersMiddleware.addHeaders,
  // LoggerMiddleware.logTheHit,
  // bodyParser.json(),
  // bodyParser.urlencoded({ extended: true })
  ErrorHandlerMiddleware.errorHandler
];

export { middleWareArrayOne, middleWareArrayTwo };
