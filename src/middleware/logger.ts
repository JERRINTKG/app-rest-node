import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { LoggerSchema } from "../schema/logger/Logger.schema";

const loggerMiddleware = (req: Request, resp: Response, next) => {
  // console.log('Request logged:', req.method, req.path)
  let loggerModel = mongoose.model("log", LoggerSchema , "logs");

  loggerModel.create(
    { route: req.path, method: req.method, dateTime: new Date() },
    function(err, small) {
      if (err) return console.log(err);
      console.log("Success");
    }
  );
  next();
};

export default loggerMiddleware;
