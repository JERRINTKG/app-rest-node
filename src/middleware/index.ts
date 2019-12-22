import * as bodyParser from "body-parser";
import LoggerMiddleware from "./LoggerMiddleware";

const middleWareArray = [
  LoggerMiddleware.logTheHit,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

export default middleWareArray;