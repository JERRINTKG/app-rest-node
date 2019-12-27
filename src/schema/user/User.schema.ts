import * as mongoose from "mongoose";

var UserSchema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    dob: { type: Date, default: Date.now },
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
    bloodGroup: String,
    maritalStatus: String,
    aboutYou: String
  }
);

export { UserSchema };
