import * as mongoose from "mongoose";
import { UserSchema } from "../../schema/user/User.schema";

export default class UserModel {
  userModel = null;
  constructor() {
    this.initModel();
  }

  initModel() {
    this.userModel = mongoose.model("user", UserSchema, "user");
  }
  getAllUsers(callback) {
    this.userModel.find((err, doc) => { callback(doc); });
  }

  getUserMeta(postData,callback) {
    this.userModel.findOne({email: postData.username}, (err,doc)=> { callback(doc); });
  }
}
