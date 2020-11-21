const $startButton = document.getElementById("startButton")
const $background = document.getElementById('background')
const $playerNameInput = document.getElementById('playerNameInput')
const $playerNameButton = document.getElementById('playerNameButton')
var $playerSprite = document.querySelector('#playerSprite')
var $goodBall = document.querySelector('#goodBall')
let moveBy = 20;

$playerSprite.style.display = 'none';
$goodBall.style.display = 'none';


$startButton.onclick = () => {
    $startButton.style.display = 'none';
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    $playerSprite.style.display = 'inline-block';
    $goodBall.style.display == 'inline-block';
    $background.src = "Img/LoadingScreens/Wallpaper.jpg";
    $background.style.left = '500px';
}

$playerNameButton.onclick = () => {
    var $playerName = document.getElementById("playerNameInput").value;
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    return $playerName;
};


window.addEventListener('Load', () => {
    $playerSprite.style.position = 'absolute';
    $playerSprite.style.left = 960 + 'px';
    $playerSprite.style.top = 540 + 'px';
    $goodBall.style.position = 'absolute';
    $goodBall.style.left = getRandomX + 'px';
    $goodBall.style.top = getRandomY + 'px';


});

window.addEventListener('keydown', (e) => {switch (e.key) { //Movement fuction detects when arrow keys down
    case 'ArrowLeft':
        moveBy = 20;
        if($playerSprite.style.left === 2080 + 'px'){ //RIGHT BORDER

            $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'

        }else if($playerSprite.style.top === 60 + 'px'){ // TOP BORDER

            $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'

        }else if($playerSprite.style.top === 1000 + 'px'){ // BOTTOM BORDER

            $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'

        }else if($playerSprite.style.left === 380 + 'px'){ // LEFT BORDER

            moveBy = 0;

        }else{ //DEFAULT MOVEMENT

            $playerSprite.style.left = parseInt($playerSprite.style.left) - moveBy + 'px'

        }
        break;

    case 'ArrowRight':
        moveBy = 20;
        if ($playerSprite.style.left === 380 + 'px') { // LEFT BORDER

         $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'

        } else if ($playerSprite.style.top === 1000 + 'px') { // BOTTOM BORDER

         $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px' 

        } else if ($playerSprite.style.top === 60 + 'px') { //TOP BORDER

         $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px'

        } else if ($playerSprite.style.left === 2080 + 'px') { //RIGHT BORDER

            moveBy = 0;

        }else{ //DEFAULT MOVEMENT
            
            $playerSprite.style.left = parseInt($playerSprite.style.left) + moveBy + 'px';  
        }        
         break;

    case 'ArrowUp':
        moveBy = 20;
        if ($playerSprite.style.left === 380 + 'px'){ // LEFT BORDER

            $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'

        } else if($playerSprite.style.top === 1000 + 'px'){ // BOTTOM BORDER

            $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'

        }else if($playerSprite.style.left === 2080 + 'px'){ // RIGHT BORDER

            $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'

        }else if($playerSprite.style.top === 60 + 'px'){ // TOP BORDER

            moveBy = 0;

        }else{ //DEFAULT MOVEMENT

            $playerSprite.style.top = parseInt($playerSprite.style.top) - moveBy + 'px'
        }
        break;

    case 'ArrowDown':
        moveBy = 20;

        if ($playerSprite.style.left === 380 + 'px'){ //LEFT BORDER

            $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'

        }else if($playerSprite.style.top === 60 + 'px'){ // TOP BORDER

            $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'

        }else if($playerSprite.style.left === 2080 + 'px'){ // RIGHT BORDER

            $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'

        }else if($playerSprite.style.top === 1000 + 'px'){ // BOTTOM BORDER

            moveBy = 0;

        }else{ // DEFAULT MOVEMENT

            $playerSprite.style.top = parseInt($playerSprite.style.top) + moveBy + 'px'
        
        }

        break;

    function getRandomInt(int)
    {
        return Math.floor(Math.random() * Math.floor(int));
    }

    function getRandomX(){

       return getRandomInt(1701) + 400
    }

    function getRandomY(){

        return getRandomInt(941) + 100
    }



}})
