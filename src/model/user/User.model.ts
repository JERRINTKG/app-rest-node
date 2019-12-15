import * as mongoose from "mongoose";
// import mongodbConnect from "../../config/mongodb";
import UserSchema from "../../schema/user/User.schema";

export default class UserModel {
  userModel = null;
  dbConnection = null;
  constructor() {
    this.setupDb();
    this.initModel();
    // this.getAllUsers();
  }
  setupDb() {
    // this.dbConnection = new mongodbConnect();
  }
  initModel() {
    this.userModel = mongoose.model("user", UserSchema);
  }
  getAllUsers() {
    this.userModel.find((err, doc) => {
      console.log(doc);
      return doc;
    });
  }
}
