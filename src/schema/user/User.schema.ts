import mongoose from "mongoose";

var UserSchema = new mongoose.Schema(
  {
    email: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    password: { type: String, default: null },
    dob: { type: Date, default: Date.now },
    job: { type: String, default: null },
    company: { type: String, default: null },
    addressOne: { type: String, default: null },
    addressTwo: { type: String, default: null },
    landMark: { type: String, default: null },
    country: { type: String, default: null },
    state: { type: String, default: null },
    pinCode: { type: String, default: null },
    gender: { type: String, default: null },
    mobileNo: { type: String, default: null },
    phoneNo: { type: String, default: null },
    profileImage: { type: String, default: null },
    bloodGroup: { type: String, default: null },
    maritalStatus: { type: String, default: null },
    aboutYou: { type: String, default: null },
    status: { type: Boolean, default: false }
  }
);

export { UserSchema };
