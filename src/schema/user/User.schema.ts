import * as mongoose from "mongoose";

var UserSchema = new mongoose.Schema(
  {
    email: String,
    dob: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    job: String,
    company: String,
    addressOne: String,
    addressTwo: String,
    landMark: String,
    country: String,
    state: String,
    pinCode: String,
    gender: String,
    mobileNo: String,
    phoneNo: String,
    profileImage: String,
    bGroup: String,
    maritalStatus: String,
    aboutYou: String
  },
  { timestamps: true, collection: "user" }
);

export { UserSchema };
