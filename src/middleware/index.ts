import * as bodyParser from "body-parser";
import loggerMiddleware from "./logger";

const middleWareArray = [
  loggerMiddleware,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

export default middleWareArray;