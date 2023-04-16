/**================================================================ 
            History Of The File 
    Author          - Ranajit Mane 
    Purpose         - Writing - Server file.
==================================================================== **/
var express = require("express");
var app = express();

const config = require("./config/config.json");

const port = process.env.PORT || config.PORT;
const hostIp = config.HOST_IP || "0.0.0.0";

// routes
require("./routes/routes")(app); // load our routes and pass in our app

app.listen(port, hostIp, () => {
  console.log("Server is running on", port);
});
