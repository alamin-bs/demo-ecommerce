"use strict";
const Auth = require("../model/Auth");


exports.login = async (req, res) => {
  try {
    let auth = new Auth(req.body);
    const result = await auth.login();
    res.status(200).send(result);
  } catch (error) {
    res.status(401).send("Invalid Username or Password");
    
  }
};

