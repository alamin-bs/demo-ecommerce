
const config = require("config")
const jwt = require("jsonwebtoken")

let Auth = function (data) {
  this.data = data;
  this.error = [];
};



Auth.prototype.login = function () {
  return new Promise(async (resolve, reject) => {
   try {
    const {username, password} = this.data;
    if(username === "admin" && password === "admin") {
      const token =  generateAuthToken(username);
      resolve(token)
    }else throw new Error("Invalid Username or Password")
   } catch (error) {
       reject(error.message)
   }

  });
};

const generateAuthToken = function(username) {
    const token = jwt.sign(    {
        id: Math.floor(Math.random() * 100),
        name: username,
      },
      config.get("jwtPrivateKey")
    );
    return token;
  };

module.exports = Auth;
