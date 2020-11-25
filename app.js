let express = require("express");
let app = express();
let serv = require("http").Server(app);
const port = process.env.PORT || 80;
let SOCKETLIST = {};
let PLAYERLIST = {};

app.get("/", function(req, res) {
    	res.sendFile(__dirname + "/Client/game.html");
});

app.use("/Client", express.static(__dirname + "/Client"));

serv.listen(port);

