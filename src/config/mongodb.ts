import * as mongoose from "mongoose";
import globalConstants from "./globalConstants";

export default class mongodbConnect {
  connectionString = globalConstants.moongodb;
  constructor() {
    this.setupDb();
  }

  private setupDb() {
    mongoose.connect(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    var db = mongoose.connection;
    return db;
  }
}
