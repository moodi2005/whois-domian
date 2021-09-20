const axios = require("axios");

module.exports = (domain) => {
  axios
    .get(
      `http://api.whoapi.com/?apikey=4c15263b4a0c99ab2106bdfe3650c711&r=whois&domain=${domain}.ir`
    )
    .then((reqd) => {
      if (!reqd.data.registered) {
       console.log(`${domain}.ir => Not purchased`);
      }
    }).catch(err=>console.log("err"))
};
