const express = require("express"); 
// call in express functionality
const app = express(); 
//create an express object called app for communication
const serv = require("http").Server(app); 
//server object
const port = process.env.PORT || 80; //server port


//const playerPos = require("./Client/js/game.js");

//var jsdom = require("jsdom");
//var JSDOM = jsdom.JSDOM;

//dom = JSDOM("./Client/game.js");

//const document = dom.document;

//const $playerSprite = new JSDOM(document.getElementById('playerSprite'));

let SOCKETLIST = {};
//list of socket connection
let PLAYERLIST = {};
//list of player connections

app.get("/", function(req, res) {     
//communicates to server the game.html file to display
    	res.sendFile(__dirname + "/Client/game.html");
});

app.use("/", express.static(__dirname + "/Client")); 
// makes accesible files only present in ./client

serv.listen(port); 
//server listens to port for when it is called and started.

console.log("Server Started");

let Player = function(id){//function of player object with different id and number
    let playerInst = {
       // x:1200 + "px",
       // y:500 + "px",
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


const io = require("socket.io")(serv, {}); //The io socket

io.on("connection", function(socket){ //checks for player connections to the server
    socket.id = Math.random(); 
    //the specific socket id of the person connected
    console.log("A player has connected.");

    let player = Player(socket.id); //player object
    SOCKETLIST[socket.id] = socket; //The array of sockets
    PLAYERLIST[socket.id] = player; // the array of players and their properties


    socket.on("disconnect", function(){// checks for player disconnection
        delete SOCKETLIST[socket.id];//deletes socket from socketlist
        delete PLAYERLIST[socket.id];//deleted player from playerlist
        console.log("A player has disconnected.");
    });S
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
    */

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



