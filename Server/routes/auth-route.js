const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const keys = require("../config/keys");
const passport = require("passport");

const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login");

const router = express.Router();
require("../midlewares/passport");

//Models
const User = require("../models/user");

//register User

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//login User

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//google auth

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/calback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

//logout

router.post("/logout", (req, res, next) => {
  res.clearCookie("access_token");
  // console.log('I managed to get here!');
  res.json({ success: true });
});

module.exports = router;
