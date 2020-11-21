const $startButton = document.getElementById("startButton")
const $background = document.getElementById('background')
const $playerNameInput = document.getElementById('playerNameInput')
const $playerNameButton = document.getElementById('playerNameButton')
var $playerSprite = document.querySelector('#playerSprite')

$playerSprite.style.display = 'none'


$startButton.onclick = () => {
    $startButton.style.display = 'none';
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    $playerSprite.style.display = 'inline-block';
    $background.src = "Img/Backgrounds/temp new background .png";
    
    
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
    //   ellipse(this.x,this.y,this.size,this.speed);
  //  }
//}

//var player = new player(960,540,9,3);

//draw = function(){
  //  player.update();
//}






let moveBy = 20;

window.addEventListener('load', () => {
    $playerSprite.style.position = 'absolute';
    $playerSprite.style.left = 960 + "px";
    $playerSprite.style.top = 500 + "px";
});


window.addEventListener('keydown', (e) => {switch (e.key) { //Movement fuction detects when arrow keys down
    case 'ArrowLeft':
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



   }
})
