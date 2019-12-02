"use strict";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
  //guardar la sesion del usuario
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  //Consultar la existencia del usuario al navegar entre páginas
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email", //a través de que dato se va autenticar al usuario
      passwordField: "password",
      passReqToCallback: true //recibir los demas datos
    },
    async (req, email, password, done) => {
      try {
        const newUser = new User();
        const user = await User.findOne({ email: email });
        if (user) {
          //console.log(user);
          return done(
            null,
            false,
            req.flash("signupMessage", "The email is already taken...")
          );
        } else {
          newUser.email = email;
          newUser.password = newUser.encryptPassword(password);
          const user = await newUser.save();
          console.log(`User ${user} saved!`);

          done(null, user);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email: email });
        if (!user) {
          done(null, false, req.flash("signinMessage", "No user found..."));
        }
        if (!user.comparePassword(password)) {
          done(null, false, req.flash("signinMessage", "Incorrect password."));
        } else {
          done(null, user);
        }
      } catch (error) {
        console.log(`Oops, error: ${error}`);
      }
    }
  )
);
