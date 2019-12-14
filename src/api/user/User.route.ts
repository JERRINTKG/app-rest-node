import * as express from "express";

let router = express.Router();

let UserRoutes = {
  meta: router.get("/meta", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  }),
  add: router.get("/add", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  })
};

export default UserRoutes;
