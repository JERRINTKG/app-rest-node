import mongoose from "mongoose";
import { ErrorHandlerSchema } from "../../schema/errorhandler/ErrorHandler.schema";

export default class ErrorHandlerModel {
  errorModel = null;
  constructor() {
    this.initModel();
  }

  initModel() {
    this.errorModel = mongoose.model("errors", ErrorHandlerSchema, "errors");
  }
  logTheError(postData, callback) {
    this.errorModel.create(postData, (err, small) => {
      if (err) return console.log(err);
      callback(err);
    });
  }
}
