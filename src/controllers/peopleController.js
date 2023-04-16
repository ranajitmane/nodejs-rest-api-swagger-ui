/**================================================================ 
            History Of The File 
    Author          - Ranajit Mane 
    purpose         - Writing - People Related APIs Operation handling
==================================================================== **/
// var axios = require("axios");
var needle = require("needle");

module.exports = {
  getPeoples: async (req, res) => {
    let result;
    needle("get", "https://swapi.dev/api/people/")
      .then(function (resp) {
        result = resp.body;
        res.send(result);
      })
      .catch(function (err) {
        console.error(err);
        res.send(err);
      });
  }
};
