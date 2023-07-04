
const User = require('../../../models/user');
const jwt  = require('jsonwebtoken');

// Creating Jwt Token


module.exports.createSession = async function (req, res) {

  try {
      let user = await User.findOne({ email: req.body.email });

      if (!user || user.password != req.body.password) {
          return res.json(422, {
              message: "Invalid Username or Password !!"
          });
      }
      return res.json(200, {
          message: "Sign in successfull,here is your token,please safe !",
          data: {
              token: jwt.sign(user.toJSON(), 'codeial', { expiresIn: 100000})
          }
      });
    
  } catch (err) {
      console.log('*********Error', err);
      // req.flash('error', err);
      return res.json('505', {
          message: "Internal Server Error!!"
        });
    }
}

