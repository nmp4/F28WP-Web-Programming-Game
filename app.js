const express = require("express");
const app = express();
const serv = require("http").Server(app);
const port = process.env.PORT || 80;
//const playerPos = require("./Client/js/game.js");



let SOCKETLIST = {};
let PLAYERLIST = {};

app.get("/", function(req, res) {
    	res.sendFile(__dirname + "/Client/game.html");
});

app.use("/", express.static(__dirname + "/Client"));

serv.listen(port);

console.log("Server Started");

let Player = function(id){
    let playerInst = {
        //x:1200 + "px",
       // y:500 + "px",
        id:id,
        number: Math.floor(Math.random() * 10000)
    }
    return playerInst;
}


const io = require("socket.io")(serv, {});

io.on("connection", function(socket){
    socket.id = Math.random();
    console.log("A player has connected.");

    let player = Player(socket.id)
    SOCKETLIST[socket.id] = socket;
    PLAYERLIST[socket.id] = player;


    socket.on("disconnect", function(){
        delete SOCKETLIST[socket.id];
        delete PLAYERLIST[socket.id];
        console.log("A player has disconnected.");
    });
});

setInterval(function(){
    let pack = [];
    for(let i in PLAYERLIST){
        let player = PLAYERLIST[i];
        //player.x = playerPos.getPlayerX();
        //player.y = playerPos.getPlayerY();
    
        pack.push({
           //x:player.x,
           //y:player.y,
           number:player.number
        });
    }

    for(let i in SOCKETLIST){
        let socket = SOCKETLIST[i];
        socket.emit("newPositions", pack);
    };

},1000/30);