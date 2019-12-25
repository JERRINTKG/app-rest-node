import * as bodyParser from "body-parser";
import LoggerMiddleware from "./LoggerMiddleware";
import HeadersMiddleware from "./HeadersMiddleware";

const middleWareArray = [
  HeadersMiddleware.addHeaders,
  LoggerMiddleware.logTheHit,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

export default middleWareArray;