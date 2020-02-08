const router = require("express").Router();
const db = require("./modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../secret/secret");

router.post("/register", async (req, res) => {
  const creds = req.body;
  const { username, password } = req.body;

  const hash = bcrypt.hashSync(creds.password, 14);
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  creds.password = hash;

  if (!format.test(password)) {
    return res.send({ message: "password requires one special character" });
  }
  if (password.length < 8) {
    return res.send({
      message: "password must be more than 8 characters long"
    });
  }
  if (creds) {
    try {
   return await  res.status(201).json(db.add(creds));
    } catch (err) {

        if (err.code === 'ER_DUP_ENTRY' || err.errno === 1062) {
          return  res.status(500).res.send({message:"username must be chnaged"})
      }
      res.status(500).send({ message: err });
    }
  } else {
    res.status(401).json({ message: "missing username and password" });
  }
});

router.post("/login", (req, res) => {
  let { password, username } = req.body;
  console.log(req.body);
  if (password && username) {
    return db
      .findBy({ username })
      .first() //takes first item out of object
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);

          res
            .status(200)
            .json({ username: `${user.username}`, token, id: user.id });
        } else {
          res.status(401).json({ message: "invalid login info" });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "you messed up, login failed" + error });
      });
  } else {
    res.status(401).json({ message: "missing username or password" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const option = {
    expiresIn: "24h"
  };

  return jwt.sign(payload, secret.jwtSecret, option);
}

module.exports = router;
