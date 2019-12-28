import * as mongoose from "mongoose";

var ErrorHandlerSchema = new mongoose.Schema(
  {
    route: String,
    method:String,
    dateTime: { type: Date, default: Date.now },
    error: String
  }
);

export { ErrorHandlerSchema };
