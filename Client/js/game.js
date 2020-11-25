const $startButton = document.getElementById("startButton"); // DOM call for startbutton object
const $background = document.getElementById('background'); // DOM call for background object
const $playerNameInput = document.getElementById('playerNameInput');
const $playerNameButton = document.getElementById('playerNameButton'); // DOM call for enter text button object
const $playerSprite = document.getElementById('playerSprite'); // DOM call for player character object
var $gameOverScreen = document.querySelector('#gameOverScreen') // DOM call for game over screen image
var $toMenuButton = document.querySelector('#toMenuButton')

const football = document.querySelector('#football'); // DOM call for ball 1 object
const football2 = document.querySelector('#football2'); // DOM call for ball 2 object
const football3 = document.querySelector('#football3'); // DOM call for ball 3 object
const football4 = document.querySelector('#football4'); // DOM call for ball 4 object
const football5 = document.querySelector('#football5'); // DOM call for ball 5 object
const football6 = document.querySelector('#football6'); // DOM call for ball 6 object
const football7 = document.querySelector('#football7'); // DOM call for ball 7 object
const football8 = document.querySelector('#football8'); // DOM call for ball 8 object
var footballArray = []
footballArray.push(football)
footballArray.push(football2)
footballArray.push(football3)
footballArray.push(football4)
footballArray.push(football5)
footballArray.push(football6)
footballArray.push(football7)
footballArray.push(football8)

const $bomb = document.querySelector('#bomb') // DOM call for bomb 1 object
const $bomb2 = document.querySelector('#bomb2') // DOM call for bomb 2 object
const $bomb3 = document.querySelector('#bomb3') // DOM call for bomb 3 object
const $bomb4 = document.querySelector('#bomb4') // DOM call for bomb 4 object
const $bomb5 = document.querySelector('#bomb5') // DOM call for bomb 5 object
const $bomb6 = document.querySelector('#bomb6') // DOM call for bomb 6 object
const $bomb7 = document.querySelector('#bomb7') // DOM call for bomb 7 object
const $bomb8 = document.querySelector('#bomb8') // DOM call for bomb 8 object
const $bomb9 = document.querySelector('#bomb9') // DOM call for bomb 9 object
const $bomb10 = document.querySelector('#bomb10') // DOM call for bomb 10 object
const $bomb11 = document.querySelector('#bomb11') // DOM call for bomb 11 object
const $bomb12 = document.querySelector('#bomb12') // DOM call for bomb 12 object
const $bomb13 = document.querySelector('#bomb13') // DOM call for bomb 13 object

var bombArray = []
bombArray.push($bomb)
bombArray.push($bomb2)
bombArray.push($bomb3)
bombArray.push($bomb4)
bombArray.push($bomb5)
bombArray.push($bomb6)
bombArray.push($bomb7)
bombArray.push($bomb8)
bombArray.push($bomb9)
bombArray.push($bomb10)
bombArray.push($bomb11)
bombArray.push($bomb12)
bombArray.push($bomb13)

const $tnt = document.querySelector('#tnt') // DOM call for tnt 1 object
const $tnt2 = document.querySelector('#tnt2') // DOM call for tnt 2 object
const $tnt3 = document.querySelector('#tnt3') // DOM call for tnt 3 object
const $tnt4 = document.querySelector('#tnt4') // DOM call for tnt 4 object
const $tnt5 = document.querySelector('#tnt5') // DOM call for tnt 5 object

var tntArray = []
tntArray.push($tnt)
tntArray.push($tnt2)
tntArray.push($tnt3)
tntArray.push($tnt4)
tntArray.push($tnt5)

var isGameOn = false; //Creates a boolean that will be used to determine if the game is running or not
var $healthpack = document.querySelector('#healthpack') // DOM call for health pack object

var score = 0; //Create variable to store player score
let moveBy = 20; //player speed (in pixels)
var intVar; // variable to later store set interval
var intVarHealth; 


var health = 100
document.getElementById('health').innerHTML = health




$playerSprite.style.display = 'none'; //hide player sprite

for (var i = 0; i < footballArray.length; i++){
    footballArray[i].style.display = 'none';
}

for (var i = 0; i < bombArray.length; i++){
    bombArray[i].style.display = 'none';
}

for (var i = 0; i < tntArray.length; i++){
    tntArray[i].style.display = 'none';
}

$healthpack.style.display = 'none';

function loadGame(){ //function that stores the eventlistener function for 'load'

    window.addEventListener('load', () => { //function that triggers when game 'loads'
        loadPlayer(); //create player 
        loadBalls(); //create create footballs
        loadBombs(); //create bombs
        loadTnt(); //create tnt
        loadHealthPack(); //create health pack
     
    })
}


$startButton.onclick = () => { //define clicking the start button as function
    $startButton.style.display = 'none'; // hide start button 
    $playerNameInput.style.display = 'none'; //hide text input 
    $playerNameButton.style.display = 'none'; //hide text input button
    $playerSprite.style.display = 'inline-block'; //show player sprite
    
    for (var i = 0; i < footballArray.length; i++){
        footballArray[i].style.display = 'inline-block';
        
    }
    
    for (var i = 0; i < bombArray.length; i++){
        bombArray[i].style.display = 'inline-block';
    }
    
    for (var i = 0; i < tntArray.length;  i++){
        tntArray[i].style.display = 'inline-block';
    }
    $healthpack.style.display = 'inline-block'; // show healthpack 
    isGameOn = true; //determine the game is currently running (true)
    
     
    Timer(); //call timer function 
    $background.src = "Img/Backgrounds/new background 1920x1080 v1.png"; //change background image to in-game background

}

$playerNameButton.onclick = () => { //define clicking the enter name button as function
    var $playerNameValue = document.getElementById('playerNameInput').value // DOM call for name textbox object
    $playerNameInput.style.display = 'none'; //hide text input
    $playerNameButton.style.display = 'none'; //hide text input button
    document.getElementById('playername').innerHTML = $playerNameValue
    
};


function gameObject(a){ //function to assign positions to a game object
    this.x = getRandomX(); + 'px' //get x coord from random int generator
    this.y = getRandomY(); + 'px' //get y coord from random int generator
    a.style.position = 'absolute' //create object on top of everything
    a.style.left = this.x + 'px'; //assign x coord of object
    a.style.top = this.y + 'px'; //assign y coord of object
}

function loadPlayer(){ //Seperate function to load player sprite into the game
    $playerSprite.style.position = 'absolute';
    $playerSprite.style.left = 1200 + "px"; //give sprite a X coordinate
    $playerSprite.style.top = 500 + "px"; //give sprite a Y coordinate
}

function loadBalls(){ //function to create football objects
    for (var i = 0; i < footballArray.length; i++){
        new gameObject(footballArray[i]);
    }
}

function loadBombs(){ //function to create bomb objects
    for (var i = 0; i < bombArray.length; i++){
        new gameObject(bombArray[i]);
    }
}

function loadTnt(){ //function to create tnt objects
    for (var i = 0; i < tntArray.length; i++){
        new gameObject(tntArray[i]);
    }
}

function loadHealthPack() //function to create health pack object
{
    var healthpack = new gameObject($healthpack);
}


loadGame(); //call loadgame 


function isCollideBall (a, b){
    
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    )


}

function movegameObject(a)
{
    a.style.left = getRandomX() + 'px'
    a.style.top = getRandomY() + 'px'
};

function addScore()
{
    if (isGameOn === true){
        score+=1;
        document.getElementById('score').innerHTML = 'score =  ' + score
        return score
    }else
    {
        score = 0;
        document.getElementById('score').innerHTML = 'score =  ' + score
    }
    
}


function checkforCollision(){
    for (var i = 0; i < footballArray.length; i++){
        if(isCollideBall($playerSprite, footballArray[i])){
            movegameObject(footballArray[i]);
            addScore();
        }
    }

    for (var i = 0; i < bombArray.length; i++){
        if(isCollideBall($playerSprite, bombArray[i])){
            movegameObject(bombArray[i]);
            health = health -25
            document.getElementById('health').innerHTML = health
            checkDead();
            return health;
        }
    }

    for (var i = 0; i < tntArray.length; i++){
        if(isCollideBall($playerSprite, tntArray[i])){
            movegameObject(tntArray[i]);
            health = health -50
            document.getElementById('health').innerHTML = health
            checkDead();
            return health;
        }
    }

    if(isCollideBall($playerSprite, $healthpack)){
        movegameObject($healthpack)
        health = health +50
        document.getElementById('health').innerHTML = health
        return health;
    }
}


function moveBombs()
{
    for(var i = 0; i < bombArray.length; i++){
        bombArray[i].style.left = getRandomX() + 'px'
        bombArray[i].style.top = getRandomY() + 'px'
    }

    for(var i = 0; i < tntArray.length; i++){
        tntArray[i].style.left = getRandomX() + 'px'
        tntArray[i].style.top = getRandomY() + 'px'
    }  
}

function moveHealthPack()
{
    $healthpack.style.left = getRandomX() + 'px';
    $healthpack.style.top = getRandomY() + 'px';
}

function Timer()
{
    if(isGameOn === true){
        intVar = setInterval(moveBombs, 3000)
        intVarHealth = setInterval(moveHealthPack, 10000)
    }else{
        clearInterval(intVar);
        clearInterval(intVarHealth);
    }
    

}

function checkDead()
{
    if (health <= 0)
    {
        $playerSprite.style.display = 'none';
        $gameOverScreen.style.display = 'inline-block';
        $toMenuButton.style.display = 'inline-block';
        isGameOn = false;
        Timer(); //call timer function 
        
        
    }
}




$toMenuButton.onclick = () => {
    $background.src = "Img/MainMenu/Menu Page1.png"
    $gameOverScreen.style.display = 'none';
    $toMenuButton.style.display = 'none';
    $startButton.style.display = 'inline-block';
    $playerNameInput.style.display = 'inline-block';
    $playerNameButton.style.display = 'inline-block';
    for (var i = 0; i < footballArray.length; i++){
        footballArray[i].style.display = 'none';
    }
    for (var i = 0; i < bombArray.length; i++){
        bombArray[i].style.display = 'none';
    }
    for (var i = 0; i < tntArray.length; i++){
        tntArray[i].style.display = 'none';
    }
    $healthpack.style.display = 'none';
    health = 100;
    document.getElementById('health').innerHTML = health
    addScore();
    
        

}


window.addEventListener('keydown', (e) => {
    switch (e.keyCode) { //Movement fuction detects when arrow keys down
        case 65:
            moveBy = 20;  
            checkforCollision()
            if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                 $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                 $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'
                    
            } else if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                    
                moveBy = 0;
            } else { //At no borders
                $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'
                    
    
            }
            break;
    
        case 68:
            moveBy = 20;
            checkforCollision()
            if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'
                    
            } else if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                moveBy = 0;
                    
            } else { //At no borders
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px';
                    
            }
            break;
    
        case 87:
            moveBy = 20;
            checkforCollision()
            if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'
                    
            } else if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                moveBy = 0;
                    
            } else { //At no borders
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'
                    
            }
            break;
    
        case 83:
            moveBy = 20;
            checkforCollision()
            if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'
                    
            } else if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                moveBy = 0;
                    
            }else { //At no borders
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'
                    
    
            }
    
            break;
    }
})





function getRandomInt(int){
    return Math.floor(Math.random() * Math.floor(int));
}

function getRandomX(){
    var coordX = getRandomInt(1600) + 380;
    return coordX;
}

function getRandomY() {
    var coordY =  getRandomInt(841) + 100;
    return coordY;
    }
