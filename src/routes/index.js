"use strict";

const { Router } = require("express");
const passport = require("passport");
const { isAuthenticated } = require("../middlewares");

const router = Router();

router.get("/", (req, res) => {
  //Initial route
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    passReqToCallback: true
  })
);

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    passReqToCallback: true
  })
);

router.get("/profile", isAuthenticated, (req, res) => {
  res.render("profile");
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
