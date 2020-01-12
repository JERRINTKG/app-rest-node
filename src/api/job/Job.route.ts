import express from "express";

let router = express.Router();

let JobRoutes = {
    details: router.get("/details", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  }),
  add: router.get("/add", (req, res) => {
    res.json({ message: "hooray! welcome to our api!" });
  })
};

export default JobRoutes;
