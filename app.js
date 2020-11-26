const express = require("express");
// call in express functionality
const app = express();
//create an express object called app for communication
const serv = require("http").Server(app);
//server object
const port = process.env.PORT || 80;
//server port

let SOCKETLIST = {};
//list of socket connection
let PLAYERLIST = {};
//list of player connections


//const playerPos = require("./Client/js/game.js");

//var jsdom = require("jsdom");
//var JSDOM = jsdom.JSDOM;

//dom = JSDOM("./Client/game.js");

//const document = dom.document;

//const $playerSprite = new JSDOM(document.getElementById('playerSprite'));

//communicates to server the game.html file to display
app.get("/", function(req, res) {
    	res.sendFile(__dirname + "/Client/game.html");
});

// makes accesible files only present in ./client
app.use("/", express.static(__dirname + "/Client"));

//server listens to port for when it is called and started.
serv.listen(port);

console.log("Server Started");

//function of player object with different id and number
let Player = function(id){
    let playerInst = {
        //x:250,
        //y:250,
        id:id,
        number: Math.floor(Math.random() * 10000)

        /*pressingRight: false,
        pressingLeft: false,
        pressingUp: false,
        pressingDown: false,
        moveBy: 20 */

    }
    return playerInst;
}

//The io socket
const io = require("socket.io")(serv, {}); 

//checks for player connections to the server
io.on("connection", function(socket){

    //the specific socket id of the person connected
    socket.id = Math.random();
    console.log("A player has connected.");

    //player object
    let player = Player(socket.id);

    //The array of sockets
    SOCKETLIST[socket.id] = socket;
    // the array of players and their properties
    PLAYERLIST[socket.id] = player;

    // checks for player disconnection
    socket.on("disconnect", function(){

        //deletes socket from socketlist
        delete SOCKETLIST[socket.id];

        //deleted player from playerlist
        delete PLAYERLIST[socket.id];
        console.log("A player has disconnected.");
    });
});

/*
**This was going to be player movement etc but game was done b4 server so all the calculations didnt work
**due to the DOM objects and the inability of node to interact with the document object.
**

    playerInst.updatePosition = function(){
        if(playerInst.pressingRight){
            coord = parseInt(playerInst.x) + playerInst.moveBy;
            playerInst.x = coord + "px" ;
        }
        else if(playerInst.pressingLeft){
            coord = parseInt(playerInst.x) - playerInst.moveBy;
            playerInst.x = coord + "px";
        }
        else if(playerInst.pressingUp){
            coord = parseInt(playerInst.y) - playerInst.moveBy;
            playerInst.y = coord + "px";
        }
        else if(playerInst.pressingDown){
            coord = parseInt(playerInst.y) + playerInst.moveBy;
            playerInst.y = coord + "px";
        }
    }
    

   setInterval(function(){
    //this would update the player data every frame, where the game goes at 30FPS
    let pack = [];
    //pack of data to be sent off in the emit statements
    for(let i in PLAYERLIST){
        let player = PLAYERLIST[i];
        //For every player inside PLAYERLIST
        //player.x = $playerSprite.style.left;
       // player.y = $playerSprite.style.top;
    
        pack.push({
            //push the player info into the pack
           //x:player.x,
          // y:player.y,
           number:player.number
        });
    }

    for(let i in SOCKETLIST){
        let socket = SOCKETLIST[i]; 
        //for every socket connection in the server
        //socket.emit("newPositions", pack);    would have emitted player positions
        socket.emit("players", pack); 
        //emit the player info from the pack.
    };

},1000/30);// for every frame in 30FPS

*/