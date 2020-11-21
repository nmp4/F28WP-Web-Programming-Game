const $startButton = document.getElementById("startButton")
const $background = document.getElementById('background')
const $playerNameInput = document.getElementById('playerNameInput')
const $playerNameButton = document.getElementById('playerNameButton')
var $playerSprite = document.getElementById('playerSprite')

$playerSprite.style.display = 'none';


$startButton.onclick = () => {
    $startButton.style.display = 'none';
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    $playerSprite.style.display = 'inline-block'
    $background.src = "Img/LoadingScreens/Wallpaper.jpg";
    
}

$playerNameButton.onclick = () => {
    var $playerName = document.getElementById("playerNameInput").value;
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    return $playerName;
};

//var Player = function (x,y,size,speed){
    //this.x = x;
    //this.y = y;
    //this.size = size;
    //this.speed = speed;
    //this.update = function(){`
       // ellipse(this.x,this.y,this.size,this.speed);
    //}
//}

//var player = new player(960,540,9,3);

//draw = function(){
    //player.update();
//}
//window.addEventListener('Load', () => {
//    $playerSprite.style.position = 'absolute';
//    $playerSprite.style.left = 960;
//    $playerSprite.style.top = 540;
//});

//window.addEventListener('keydown', (e) => {
 //   switch (e.key) {
 //       case 'ArrowLeft':
//            $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'
 //           break;
  //      case 'ArrowRight':
  //          $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'
 //           break;
 //       case 'ArrowUp':
 //           $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'
 //           break;
  //      case 'ArrowDown':
 //           $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'
 //           break;
//    }
//})
//let circle = document.querySelector('.circle');
//let moveBy = 20;

//window.addEventListener('load', () => {
 //   circle.style.position = 'absolute';
 //   circle.style.left = 0;
 //   circle.style.top = 0;
//});


//window.addEventListener('keydown', (e) => {
//    switch (e.key) { //Movement fuction detects when arrow keys are
 //       case 'ArrowLeft':
 //           circle.style.left = parseInt(circle.style.left) - moveBy + 'px'
 //           break;
 //       case 'ArrowRight':
 //           circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
//            break;
 //       case 'ArrowUp':
  //          circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
  //          break;
 //       case 'ArrowDown':
 //           circle.style.top = parseInt(circle.style.top) + moveBy + 'px'
 //           break;
  //      case 'ArrowDown' && 'ArrowRight':
 //           circle.style.top = parseInt(circle.style.top) + moveBy + 'px'
 //           circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
 //           break;
 //       case 'ArrowDown' && 'ArrowLeft':
   //         circle.style.top = parseInt(circle.style.top) + moveBy + 'px'
 //           circle.style.left = parseInt(circle.style.left) - moveBy + 'px'
  //          break;
  //      case 'ArrowUp' && 'ArrowRight':
  //          circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
  //          circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
 //           break;
 //       case 'ArrowUp' && 'ArrowLeft':
  //          circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
   //         circle.style.left = parseInt(circle.style.left) - moveBy + 'px'
 //           break;



 //   }
//})
var character = document.querySelector("#player");
var map = document.querySelector("#background");

//state of character
var x = 0;
var y = 0;
var held_directions = []; //state of which arrow keys we are holding down 
var speed = 1; // how fast the character moves in pixels per frame


const placeCharacter = () => {

    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'))

    const held_direction = held_directions[0];
    if (held_direction) {
        if (held_direction === directions.right) { x += speed; }
        if (held_direction === directions.left) { x -= speed; }
        if (held_direction === directions.down) { y += speed; }
        if (held_direction === directions.up) { y -= speed; }
    }

    character.style.transform = `translate3d( ${x * pixelSize}px, ${y * pixelSize}px, 0 )`;
}

//set up the game loop
const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => { step(); })
}
step(); //kick off the first step

const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
}

const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
}

document.addEventListener("keydown", (e) => {
    var direc = keys[e.which];
    if (direc && held_directions.indexOf(direc) === -1) {
        held_directions.unshift(direc)
    }
})

document.addEventListener("keyup", (e) => {
    var direc = keys[e.which];
    var index = held_directions.indexOf(direc);
    if (index > -1) {
        held_directions.splice(index, 1)
    }
})
