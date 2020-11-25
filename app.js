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

console.log("Server Started");
let Player = function(id){
    let playerInst = {
        x:250,
        y:250,
        id:id,
        number: Math.floor(Math.random() * 10000)
    }
    return playerInst;
}


const io = require("socket.io")(serv, {});

let SOCKETLIST = {};
io.sockets.on("connection", function(socket){
    socket.id = Math.random();

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
        pack.push({
            x:socket.x,
            y:socket.y,
            number:socket.number
        });
    }

    for(let i in SOCKETLIST){
        let socket = SOCKETLIST[i];
        socket.emit("newPositions", pack);
    };

},1000/30);