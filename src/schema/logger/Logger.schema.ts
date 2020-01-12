import mongoose from "mongoose";

var LoggerSchema = new mongoose.Schema(
  {
    route: String,
    method:String,
    dateTime: { type: Date, default: Date.now },
  }
);

export { LoggerSchema };
