import * as express from "express";
import UserController from "../../controller/user/User.controller";

let router = express.Router();

let UserRoutes = {
  all: router.get("/all",  (req, res) => {
    let data = new UserController();
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
