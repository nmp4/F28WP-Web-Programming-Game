
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
var footballArray = [] //create array to store football objects
// then push all footballs into the array
footballArray.push(football) 
footballArray.push(football2)
footballArray.push(football3)
footballArray.push(football4)
footballArray.push(football5)
footballArray.push(football6)
footballArray.push(football7)
footballArray.push(football8)

//create variables to store all bomb objects
const $bomb = document.querySelector('#bomb') 
const $bomb2 = document.querySelector('#bomb2') 
const $bomb3 = document.querySelector('#bomb3') 
const $bomb4 = document.querySelector('#bomb4') 
const $bomb5 = document.querySelector('#bomb5') 
const $bomb6 = document.querySelector('#bomb6') 
const $bomb7 = document.querySelector('#bomb7')
const $bomb8 = document.querySelector('#bomb8') 
const $bomb9 = document.querySelector('#bomb9') 
const $bomb10 = document.querySelector('#bomb10') 
const $bomb11 = document.querySelector('#bomb11') 
const $bomb12 = document.querySelector('#bomb12') 
const $bomb13 = document.querySelector('#bomb13') 

var bombArray = [] //create array to store bomb objects
//then push all bomb objects into array
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

//create variables to store all tnt objects
const $tnt = document.querySelector('#tnt') 
const $tnt2 = document.querySelector('#tnt2') 
const $tnt3 = document.querySelector('#tnt3') 
const $tnt4 = document.querySelector('#tnt4') 
const $tnt5 = document.querySelector('#tnt5')

var tntArray = [] //create array to store tnt objects
//then push all tnt objects into array
tntArray.push($tnt)
tntArray.push($tnt2)
tntArray.push($tnt3)
tntArray.push($tnt4)
tntArray.push($tnt5)

var $healthpack = document.querySelector('#healthpack') // create variable to store healthpack object

var isGameOn = false; //Create a boolean that will be used to determine if the game is running or not
var score = 0; //Create variable to store player score
let moveBy = 20; //player speed (in pixels)
var intVar; // variable to later store set interval for movebombs
var intVarHealth; // variable to later store set interval for movehealthpack


var health = 100 //declare health variable and give value of 100
document.getElementById('health').innerHTML = health //update html element to have the value of health


function hideGameObjects(){
    for (var i = 0; i < footballArray.length; i++){ //loop through footballArray
        footballArray[i].style.display = 'none'; //hide all elements
    }
    
    for (var i = 0; i < bombArray.length; i++){ //loop through bombArray
        bombArray[i].style.display = 'none'; // hide all elements
    }
    
    for (var i = 0; i < tntArray.length; i++){ //loop through tntArray
        tntArray[i].style.display = 'none'; // hide all elements
    }
    
    $healthpack.style.display = 'none'; //hide healthpack
}

$playerSprite.style.display = 'none'; //hide player sprite
hideGameObjects();



function loadGame(){ //function that stores the eventlistener function for 'load'

    window.addEventListener('load', () => { //function that triggers when game 'loads'
        loadPlayer(); //create player 
        loadBalls(); //create footballs
        loadBombs(); //create bombs
        loadTnt(); //create tnt
        loadHealthPack(); //create health pack
     
    })
}

loadGame(); //call loadgame 


$startButton.onclick = () => { //define clicking the start button as function
    $startButton.style.display = 'none'; // hide start button 
    $playerNameInput.style.display = 'none'; //hide text input 
    $playerNameButton.style.display = 'none'; //hide text input button
    $playerSprite.style.display = 'inline-block'; //show player sprite
    
    for (var i = 0; i < footballArray.length; i++){ //iterate through footballArray
        footballArray[i].style.display = 'inline-block'; //show all elements
    }
    
    for (var i = 0; i < bombArray.length; i++){ //iterate through bombArray
        bombArray[i].style.display = 'inline-block'; //show all elements
    }
    
    for (var i = 0; i < tntArray.length;  i++){ //iterate through tntArray
        tntArray[i].style.display = 'inline-block'; //show all elements
    }
    $healthpack.style.display = 'inline-block'; // show healthpack 
    $background.src = "Img/Backgrounds/new background 1920x1080 v1.png"; //change background image to in-game background
    isGameOn = true; //determine the game is currently running (true)
    Timer(); //call timer function 

}

$playerNameButton.onclick = () => { //define clicking the enter name button as function
    var $playerNameValue = document.getElementById('playerNameInput').value // DOM call for name textbox object
    $playerNameInput.style.display = 'none'; //hide text input
    $playerNameButton.style.display = 'none'; //hide text input button
    document.getElementById('playername').innerHTML = $playerNameValue //update html element
    
};


function gameObject(a){ //function to assign positions to a game object
    this.x = getRandomX(); + 'px' //get x coord from random int generator
    this.y = getRandomY(); + 'px' //get y coord from random int generator
    a.style.position = 'absolute' //create object on top of everything
    a.style.left = this.x + 'px'; //assign x coord of object
    a.style.top = this.y + 'px'; //assign y coord of object
}

function loadBalls(){ //function to create football objects
    for (var i = 0; i < footballArray.length; i++){ //iterate through footballArray
        new gameObject(footballArray[i]); //make each element a gameObject
    }
}

function loadBombs(){ //function to create bomb objects
    for (var i = 0; i < bombArray.length; i++){ //iterate through bombArray
        new gameObject(bombArray[i]); // make each element a gameObject
    }
}

function loadTnt(){ //function to create tnt objects
    for (var i = 0; i < tntArray.length; i++){ //iterate through tntArray
        new gameObject(tntArray[i]); // make each element a gameObject
    }
}

function loadHealthPack() //function to create health pack object
{
    var healthpack = new gameObject($healthpack); //make healthpack a gameObject
}

function loadPlayer(){ //Seperate function to load player sprite into the game
    $playerSprite.style.position = 'absolute';
    $playerSprite.style.left = 1200 + "px"; //give sprite a X coordinate
    $playerSprite.style.top = 500 + "px"; //give sprite a Y coordinate
}





function checkForCollision (a, b){
    
    var first = a.getBoundingClientRect(); //returns the smallest rectangle that contains the entire element(image in our case)
    var second = b.getBoundingClientRect(); //returns the smallest rectangle that contains the entire element(image in our case)

    //This boolean operation checks if the first object (player) is below/above/left/right of the second object (eg football)s position and dimensions.
    //so if the player touches a game object (collision), all of these statements would result in a FALSE result, to change this to TRUE, we use the
    //NOT operation !
    //then we can do things like check if this function is TRUE
    return !(
        ((first.top + first.height) < (second.top)) || //check below
        (first.top > (second.top + second.height)) || //check above
        ((first.left + first.width) < second.left) || //check left
        (first.left > (second.left + second.width)) //check right
    )


}

function movegameObject(a) //function to change a game objects positiob
{
    a.style.left = getRandomX() + 'px' //assign random value as x coord
    a.style.top = getRandomY() + 'px' //assign random value as y coord
};

function addScore() //function to update score
{
    if (isGameOn === true){ //if game is running
        score+=1; //add 1 to score
        document.getElementById('score').innerHTML = 'score =  ' + score //update html element to reflect score
        return score 
    }else //if game is not running (has ended)
    {
        score = 0; //reset score to 0
        document.getElementById('score').innerHTML = 'score =  ' + score //update html element to reflect reset score
    }
    
}


function collisionActions(){ //function that performs outcomes after collision

    for (var i = 0; i < footballArray.length; i++){ //iterate through footballArray
        if(checkForCollision($playerSprite, footballArray[i])){ //if player collides with a football
            movegameObject(footballArray[i]); //move the football they collided with
            addScore(); //update score
        }
    }

    for (var i = 0; i < bombArray.length; i++){ //iterate through bombArray
        if(checkForCollision($playerSprite, bombArray[i])){ //if player collides with a bomb
            movegameObject(bombArray[i]); //move the bomb they collided with 
            health = health -25 //update health
            document.getElementById('health').innerHTML = health //update html health
            checkDead(); //check if player should be dead
            return health;
        }
    }

    for (var i = 0; i < tntArray.length; i++){ //iterate through tntArray
        if(checkForCollision($playerSprite, tntArray[i])){ //if player collides with tnt
            movegameObject(tntArray[i]); //move the tnt they collided with
            health = health -50 //update health
            document.getElementById('health').innerHTML = health //update html health
            checkDead(); //check if player should be dead
            return health;
        }
    }

    if(checkForCollision($playerSprite, $healthpack)){ //if player collides with healthpack
        movegameObject($healthpack) //move the healthpack
        health = health +50 //update health
        document.getElementById('health').innerHTML = health //update html health
        return health;
    }
}

//We thought we didnt need this function due to having moveGameObject(a), but our setinterval wouldn't accept a method that takes a parameter
function moveBombs() //function that moves bombs specifically 
{
    for(var i = 0; i < bombArray.length; i++){ //iterate through bombArray
        bombArray[i].style.left = getRandomX() + 'px' //give new x coord
        bombArray[i].style.top = getRandomY() + 'px' //give new y coorrd
    }

    for(var i = 0; i < tntArray.length; i++){ //iterate through tntArray
        tntArray[i].style.left = getRandomX() + 'px' //give new x coord
        tntArray[i].style.top = getRandomY() + 'px' //give new y coord
    }  
}

//same issue as above
function moveHealthPack() //function to move healthpack specifically
{
    $healthpack.style.left = getRandomX() + 'px'; //give new x coord
    $healthpack.style.top = getRandomY() + 'px'; //give new y coord
}

function Timer() //function for setintervals
{
    if(isGameOn === true){ //if game is running
        intVar = setInterval(moveBombs, 3000) //call movebombs method every seconds
        intVarHealth = setInterval(moveHealthPack, 10000) //call movehealthpack method every 10 seconds
    }else{ //if game isnt running
        clearInterval(intVar); //stop calling movebombs
        clearInterval(intVarHealth); //stop calling movehealthpack
    }
    

}

function checkDead() //function to check if player should be dead
{
    if (health <= 0) //if health goes down to 0 or below
    {
        $playerSprite.style.display = 'none'; //hide player object
        $gameOverScreen.style.display = 'inline-block'; //show game over screen
        $toMenuButton.style.display = 'inline-block'; //show button
        isGameOn = false; //set boolean (is game running) to false
        Timer(); //call timer function (this will stop the movebombs and movehealthpack methods)
    }
}




$toMenuButton.onclick = () => { //to menu button being clicked triggers this function
    $background.src = "Img/MainMenu/Menu Page1.png" //change background to menu screen
    $gameOverScreen.style.display = 'none'; //hide game over screen
    $toMenuButton.style.display = 'none'; //hide to menu button
    $startButton.style.display = 'inline-block'; //show start game button
    $playerNameInput.style.display = 'inline-block'; //show name input field
    $playerNameButton.style.display = 'inline-block'; //show name input button

    hideGameObjects(); //hide game objects
    health = 100; //reset health to 100
    document.getElementById('health').innerHTML = health //update html health
    addScore(); //reset score to 0     
}

//Worked out this fairly simple movement function, but it isnt ideal. the player will stutter once before moving smoothly every time a direction is chosen.
//And it doesnt handle diagonal movement.
//We set movement to 20 at every event incase the previous event was the player moving INTO a border (so movement was set to 0)
//We call collisionActions at every event incase the movement results in a collision

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) { //Movement fuction detects when arrow keys down
        case 65: // A KEY (movement LEFT)
            moveBy = 20;  //set movement to 20
            collisionActions() //perform collision actions if collision

            if ($playerSprite.style.left === 2080 + 'px') { //if character is at RIGHT BORDER
                 $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character is at TOP BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character is at BOTTOM BORDER
                 $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.left === 380 + 'px') { //if character is at LEFT BORDER
                    
                moveBy = 0; //player doesnt move

            } else { //At no borders
                $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px' //player moves
            }
            break;
    
        case 68: // D KEY (movement RIGHT)
            moveBy = 20; //set movement to 20px
            collisionActions() //perform collisions actions if collison
            if ($playerSprite.style.left === 380 + 'px') { //if character is at LEFT BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character is at BOTTOM BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character is at TOP BORDER
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.left === 2080 + 'px') { //if character is at RIGHT BORDER

                moveBy = 0; //player doesnt move
                    
            } else { //At no borders
                $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'; //player moves       
            }
            break;
    
        case 87: // W KEY (movement UP)
            moveBy = 20; //set movement to 20px
            collisionActions() //perform collision actions if collision
            if ($playerSprite.style.left === 380 + 'px') { //if character is at LEFT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character is at BOTTOM BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.left === 2080 + 'px') { //if character is at RIGHT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character is at TOP BORDER
                moveBy = 0; //player doesnt move
                    
            } else { //At no borders
                $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px' //player moves      
            }
            break;
    
        case 83: // S KEY (movement DOWN)
            moveBy = 20; //set movement to 20px
            collisionActions() //perform collision actions if collision
            if ($playerSprite.style.left === 380 + 'px') { //if character is at LEFT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 60 + 'px') { //if character is at TOP BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.left === 2080 + 'px') { //if character is at RIGHT BORDER
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px' //player moves
                    
            } else if ($playerSprite.style.top === 1000 + 'px') { //if character is at BOTTOM BORDER
                moveBy = 0; //player doesn't move
                    
            }else { //At no borders
                $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px' //player moves
            }
            break;
    }
})

function getRandomInt(int){ //function to get a random int
    return Math.floor(Math.random() * Math.floor(int)); //return whole int
}

function getRandomX(){ //function to get x value
    var coordX = getRandomInt(1600) + 380; //generate value within left and right borders
    return coordX;
}

function getRandomY() { //function to get y value
    var coordY =  getRandomInt(841) + 100; //generate value within top and bottom borders
    return coordY;
}


function getPlayerX(){
    return  $playerSprite.style.left;
}   

function getPlayerY(){
    return $playerSprite.style.top;
}


module.exports = {getPlayerX, getPlayerY};