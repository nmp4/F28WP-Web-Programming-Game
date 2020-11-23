const { Domain } = require("domain");
let express = require("express");
let app = express();
let serv = require("http").Server(app);

app.get("/", function(req, res) {
    	res.sendFile(__dirname + "/Client/game.html");
});

app.use("/Client", express.static(__dirname + "/Client"));

serv.listen(process.env.PORT || 80);
console.log("Server Started");

let io = require("socket.io")(serv, {});

io.sockets.on("connection", function(socket){
    socket.id = Math.floor(Math.random() * 10000);

    SOCKETLIST[socket.id] = socket;

    console.log("socket connection");
});

let SOCKETLIST = {};

setInterval(function(){
    for(let i in SOCKETLIST){
        let socket = SOCKETLIST[i];
    }
},1000/30);