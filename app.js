const { Domain } = require("domain");
let express = require("express");
let app = express();
let serv = require("http").Server(app);

app.get("/", function(req, res) {
    	res.sendFile(__dirname + "/client/game.html");
});

app.use("/client", express.static(__dirname + "/client"));

serv.listen(process.env.PORT || 80);

