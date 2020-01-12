import mongoose from "mongoose";
import globalConstants from "./globalConstants";

export default class MongodbConnect {
  connectionString = globalConstants.moongodb;
  constructor() {
    // this.setupDb();
  }

  setupDb() {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(this.connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(success => {
          // console.log(success);
          resolve(success);
        })
        .catch(error => {
          // console.log(error.reason);
          reject(error);
        });
    });
  }
}
