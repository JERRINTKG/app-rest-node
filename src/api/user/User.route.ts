import * as express from "express";
import UserController from "../../controller/user/User.controller";

let router = express.Router();

let UserRoutes = {
  all: router.get("/api/user/all", UserController.getAllUsers),
  meta: router.get("/api/user/meta", UserController.getUserMeta),
  add: router.post("/api/user/register", UserController.registerUser),
  dummy: router.get("/api/user/dummy", UserController.dummyCheck)
};

export default UserRoutes;
