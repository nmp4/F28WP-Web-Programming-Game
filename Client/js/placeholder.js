const $startButton = document.getElementById("startButton"); // get startbutton from DOM
const $background = document.getElementById('background'); // get background from DOM
const $playerNameInput = document.getElementById('playerNameInput'); // get 
const $playerNameButton = document.getElementById('playerNameButton');
const $playerSprite = document.getElementById('playerSprite');
const $goodBall = document.querySelector('#goodBall');
const $playerName = document.getElementById('playerNameInput').value;
let counter = 0;
var ball = []
let moveBy = 20;



$playerSprite.style.display = 'none'
$goodBall.style.display = 'none'


$startButton.onclick = () => {
    $startButton.style.display = 'none';
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    $playerSprite.style.display = 'inline-block';
    $goodBall.style.display = 'inline-block';
    
    $background.src = "Img/Backgrounds/new background 1920x1080 v1.png";

}

$playerNameButton.onclick = () => {
    var $playerName = document.getElementById("playerNameInput").value;
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    return $playerName;
};


function Ball(){
    this.x = getRandomInt(1701) + 400;
    this.y = getRandomInt(941) + 100;
    $goodBall.style.position = 'absolute'
    $goodBall.style.left = this.x + 'px';
    $goodBall.style.top = this.y + 'px';
    console.log(this.x + ',' + this.y)
}






window.addEventListener('load', () => {
    $playerSprite.style.position = 'absolute';
    $playerSprite.style.left = 960 + "px";
    $playerSprite.style.top = 500 + "px";
    var ball1 = new Ball();
    
      
    
    

    
    
})







window.addEventListener('keydown', (e) => {
    switch (e.key) { //Movement fuction detects when arrow keys down
        case 'ArrowLeft':
            moveBy = 20;
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

        case 'ArrowRight':
            moveBy = 20;
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

        case 'ArrowUp':
            moveBy = 20;
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

        case 'ArrowDown':
            moveBy = 20;
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
}
)

function getRandomInt(int){
    return Math.floor(Math.random() * Math.floor(int));
}

function getRandomX(){
    return getRandomInt(1701) + 400;
}

function getRandomY() {
    return getRandomInt(941) + 100;
}

//function isCollideBall (a, b){
    //return !(
        //((a.style.top + a.style.height) < (b.style.top)) ||
        //(a.style.top > (b.style.top + b.style.height)) ||
        //((a.style.left + a.style.width) < b.style.left) ||
        //(a.style.left > (b.style.left + b.style.width))
    //);
//}
