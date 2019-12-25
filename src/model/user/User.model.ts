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
    this.userModel.find().exec((err,doc)=> { callback(doc); });
  }

  getUserMeta(postData,callback) {
    this.userModel.find({email: postData.username}).select('email firstName lastName profileImage').exec((err,doc)=> { callback(doc); }); 
  }
}
