"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../../model/user/User.model");
class UserController {
    constructor() {
        this.userModel = null;
        this.getAllUsers = (req, res) => {
            this.userModel.getAllUsers(d => {
                res.json({ status: true, data: d, message: "fetch success" });
            });
        };
        this.getUserMeta = (req, res) => {
            let postData = { username: req.query.username };
            this.userModel.getUserMeta(postData, d => {
                res.json({ status: true, data: d, message: "fetch success" });
            });
        };
        this.registerUser = (req, res) => {
            let postData = {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                dob: req.body.dob,
                job: req.body.job,
                company: req.body.company,
                addressOne: req.body.addressOne,
                addressTwo: req.body.addressTwo,
                landMark: req.body.landMark,
                country: req.body.country,
                state: req.body.state,
                pinCode: req.body.pinCode,
                gender: req.body.gender,
                mobileNo: req.body.mobileNo,
                phoneNo: req.body.phoneNo,
                // profileImage: null,
                bloodGroup: req.body.bloodGroup,
                maritalStatus: req.body.maritalStatus,
                aboutYou: req.body.aboutYou
            };
            this.userModel.registerUser(postData, d => {
                res.json({ status: true, data: d, message: "insert success" });
            });
            // res.json({ data: req.body });
        };
        this.userModel = new User_model_1.default();
    }
}
exports.default = new UserController();
//# sourceMappingURL=User.controller.js.map