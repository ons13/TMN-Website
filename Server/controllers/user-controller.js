const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto =require("crypto");
const User =require("../models/user");
 
 
//register a new user
const register = async (data,role,res) => {
    try {
        const userExit = await validateEmail(data.email);
        if(userTaken){
            return res.status(400).json({
 
                email:"email alredy aken" ,
                message:"registration failure",
                success: false ,
            })
        }
        const hashedPassword = await bcrypt.hash(data.password, 16);
        const code = crypto.randomInt(100000, 1000000);
        const newUser = new User({
            ...data,
            password: hashedPassword,
            verificationCode: code,
            role
        });
            //user save
        await newUser.save();
        return res.status(201).json({
            message: "Account successfully created",
            success: true,
        });
 
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
};

//login fonction 
const login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              userId: user._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }

  const verify = async (data, res) => {
    try { 
        let { code } = data;
        const user = await User.findOne( { verificationCode: code });
        if(!user) {
            return res.status(404).json({
                message: "Invalid code",
                success: false
            }); 
        } else if(user.isEmailVerified) {
            return res.status(404).json({
                message: "Email already verified",
                success: false
            }); 
        }
        await user.update ({ isEmailVerified: true});
        return res.status(201).json({
            message: "Email verification success",
            success: true
        }); 
    } catch (err) {
        
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
};




 
// fonction to check if the user exist
 
const validateEmail = async (email) =>{
    let user= await User.findOne({ email });
    if (user) {
        return true ;
    } else {
        return false ;
    }
};

module.exports = {
    login,
    register
};
