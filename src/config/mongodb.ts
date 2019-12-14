import { MongoClient } from "mongodb";
import globalConstants from "./globalConstants";

export class MongodbConnect {
  private connectionString;
  public client;
  constructor() {
      this.connectionString = globalConstants.moongodb;
  }

  async connect() {
    // add async
    console.log("connecting to mongo");

    try {
      if (!this.client) {
        // I added this extra check
        console.log("setting client");
        this.client = await MongoClient.connect(this.connectionString, {
          useNewUrlParser: true
        });
        console.log(this.client);
      }
    } catch (error) {
      console.log("error during connecting to mongo: ");
      console.error(error);
    }
  }
}
