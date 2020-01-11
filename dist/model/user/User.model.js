"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const User_schema_1 = require("../../schema/user/User.schema");
class UserModel {
    constructor() {
        this.userModel = null;
        this.initModel();
    }
    initModel() {
        this.userModel = mongoose.model("user", User_schema_1.UserSchema, "user");
    }
    getAllUsers(callback) {
        this.userModel.find().select('-_id').exec((err, doc) => { callback(doc); });
    }
    getUserMeta(postData, callback) {
        this.userModel.find({ email: postData.username }).select('-_id email firstName lastName profileImage').exec((err, doc) => { callback(doc); });
    }
    registerUser(postData, callback) {
        let Data = this.userModel;
        let post = new Data(postData);
        post.save().then((response) => { callback(response); });
    }
}
exports.default = UserModel;
//# sourceMappingURL=User.model.js.map