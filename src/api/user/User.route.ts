import * as express from "express";
import UserModel from "../../model/user/User.model";

let router = express.Router();

let UserRoutes = {
  all: router.get("/all", (req, res) => {
    let data = new UserModel();
    console.log(data.getAllUsers());
    res.json({ message: "hooray! welcome to our api!" });
  }),
  meta: router.get("/meta", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  }),
  add: router.get("/add", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  })
};

export default UserRoutes;
