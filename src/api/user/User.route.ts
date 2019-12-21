import * as express from "express";
import UserController from "../../controller/user/User.controller";
// import  Common from "../../helper/common";

let router = express.Router();

// let helper = new Common();
let data = new UserController();

// let path = helper.getPathUrl(__dirname);

let UserRoutes = {
  all: router.get("/api/user/all",  (req, res) => {
    data.getAllUsers(req,res);
  }),
  meta: router.get("/meta", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  }),
  add: router.get("/add", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  })
};

export default UserRoutes;
