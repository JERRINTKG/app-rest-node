import * as mongoose from "mongoose";
import globalConstants from "./globalConstants";

export default class MongodbConnect {
  connectionString = globalConstants.moongodb;
  constructor() {
    this.setupDb();
  }

  private setupDb() {
    mongoose
      .connect(this.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error.reason);
      });
  }
}
