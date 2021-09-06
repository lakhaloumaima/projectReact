const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  // craete user
  createuser: async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const user = await User.findOne({ email });
      if (user) throw Error("User already exists");

      const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error("Something went wrong with bcrypt");

      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error("Something went wrong hashing the password");

      const newUser = new User({
        name,
        email,
        password: hash,
      });

      const savedUser = await newUser.save();
      if (!savedUser) throw Error("Something went wrong saving the user");

      /* const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
        expiresIn: 3600,
      }); */

      res.status(200).json({
        message: "user successfuly registred",
        user: savedUser,
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  getuserbyid: (req, res) => {
    User.findById({ _id: req.user.id }, (err, user) => {
      if (!user) {
        res.status(500).json({
          message: "user not found ",
          data: null,
        });
      } else {
        res.status(200).json({
          message: "user found ",
          data: user,
        });
      }
    });
  },



  updateuser: (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, user) => {
      if (!user) {
        res.status(500).json({
          message: "user not updated ",
          data: null,
        });
      } else {
        res.status(200).json({
          message: "user updated successfuly ",
          data: user,
        });
      }
    });
  },

  deleteuser: (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) {
        res.status(500).json({
          message: "user not deleted ",
          data: null,
          status: 500,
        });
      } else {
        res.status(200).json({
          message: "user deletd successfuly ",
          data: null,
          status: 200,
        });
      }
    });
  },

  getallusers: (req, res) => {
    User.find({}, (err, users) => {
      if (users.length <= 0) {
        res.status(500).json({
          message: "no users in system ",
          data: null,
        });
      } else {
        res.status(200).json({
          message: "users in system ",
          data: users,
        });
      }
    });
  },

  authenticate: (req, res) => {
    const { email, password } = req.body;
    // Simple validation
    if (!email || !password) {
      return res.status(500).json({ message: "Please enter all fields" });
    } else {
      User.findOne({ email: email }, async (err, user) => {
        if (!user) {
          res.status(500).json({
            message: "user with this email does not exist",
          });
        } else {
          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            res.status(500).json({
              message: "invalid password",
            });
          } else {
            const token = jwt.sign({ id: user._id }, "jwt-secret");
            res.status(200).json({
              token: token,
              user: user,
            });
          }
        }
      });
    }
  },

  uploadavatar: (req, res) => {
    const data = {
      avatar: req.file.filename,
    };

    User.findByIdAndUpdate({ _id: req.user.id }, data, (err, user) => {
      if (err) {
        res.status(500).json({ message: "avatar not uploaded" });
      } else {
        User.findById({ _id: user._id }, (nerr, nuser) => {
          if (nerr) {
            res.json("error");
          } else {
            res.status(200).json({
              message: "user updated",
              data: nuser,
            });
          }
        });
      }
    });
  },
};
