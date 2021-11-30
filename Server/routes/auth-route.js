const express = require ("express");
const router = express.Router();
const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login");
const User =require("../models/user");
const bcrypt =require("bcrypt");




router.post ('/signup',(req, res)=> {
    console.log("bodyyyyyyyyy",req.body);
    const { errors, isValid } = validateRegisterInput(req.body);
    
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {

  
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

router.post ('/login',(req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
  
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload
  
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          errors.password = 'Password incorrect';
          return res.status(400).json(errors);
        }
      });
    });
  });

module.exports = router ;