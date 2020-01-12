import mongoose from "mongoose";
import { LoggerSchema } from "../../schema/logger/Logger.schema";

export default class LoggerModel {
  loggerModel = null;
  constructor() {
    this.initModel();
  }

  initModel() {
    this.loggerModel = mongoose.model("logger", LoggerSchema, "logger");
  }
  logTheHit(postData, callback) {
    this.loggerModel.create(postData, (err, small) => {
      if (err) return console.log(err);
      callback(err);
    });
  }
}
