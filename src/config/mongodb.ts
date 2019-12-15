import * as mongoose from "mongoose";
import globalConstants from "./globalConstants";

export default class mongodbConnect {
  connectionString = globalConstants.moongodb;
  constructor() {
    this.setupDb();
  }

  private setupDb(): void {
    var UserSchema = new mongoose.Schema(
      {
        username: String,
        email: String
      },
      { timestamps: true, collection: "user" }
    );

    let user = mongoose.model("user", UserSchema);

    mongoose.connect(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    var db = mongoose.connection;
    console.log(mongoose.connection.readyState);
    user.find((err, doc) => {
      console.log(doc);
    });
    db.on("error", console.error.bind(console, "MongoDB Connection error"));
  }
}
