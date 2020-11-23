const $startButton = document.getElementById("startButton"); // get startbutton from DOM
const $background = document.getElementById('background'); // get background from DOM
const $playerNameInput = document.getElementById('playerNameInput'); // get 
const $playerNameButton = document.getElementById('playerNameButton');
const $playerSprite = document.getElementById('playerSprite');
const $goodBall = document.querySelector('#goodBall');
const $goodBall2 = document.querySelector('#goodBall2');
const $goodBall3 = document.querySelector('#goodBall3');
const $goodBall4 = document.querySelector('#goodBall4');
const $goodBall5 = document.querySelector('#goodBall5');
const $goodBall6 = document.querySelector('#goodBall6');
const $goodBall7 = document.querySelector('#goodBall7');
const $goodBall8 = document.querySelector('#goodBall8');
const $bomb = document.querySelector('#bomb')
const $bomb2 = document.querySelector('#bomb2')
const $bomb3 = document.querySelector('#bomb3')
const $bomb4 = document.querySelector('#bomb4')
const $bomb5 = document.querySelector('#bomb5')
const $bomb6 = document.querySelector('#bomb6')
const $bomb7 = document.querySelector('#bomb7')
const $bomb8 = document.querySelector('#bomb8')
const $playerName = document.getElementById('playerNameInput').value;
let counter = 0;
var ball = []
let moveBy = 20;
var intVar;



$playerSprite.style.display = 'none';
$goodBall.style.display = 'none';
$goodBall2.style.display = 'none';
$goodBall3.style.display = 'none';
$goodBall4.style.display = 'none';
$goodBall5.style.display = 'none';
$goodBall6.style.display = 'none';
$goodBall7.style.display = 'none';
$goodBall8.style.display = 'none';
$bomb.style.display = 'none';
$bomb2.style.display = 'none';
$bomb3.style.display = 'none';
$bomb4.style.display = 'none';
$bomb5.style.display = 'none';
$bomb6.style.display = 'none';
$bomb7.style.display = 'none';
$bomb8.style.display = 'none';



$startButton.onclick = () => {
    $startButton.style.display = 'none';
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    $playerSprite.style.display = 'inline-block';
    $goodBall.style.display = 'inline-block';
    $goodBall2.style.display = 'inline-block';
    $goodBall3.style.display = 'inline-block';
    $goodBall4.style.display = 'inline-block';
    $goodBall5.style.display = 'inline-block';
    $goodBall6.style.display = 'inline-block';
    $goodBall7.style.display = 'inline-block';
    $goodBall8.style.display = 'inline-block';
    $bomb.style.display = 'inline-block';
    $bomb2.style.display = 'inline-block';
    $bomb3.style.display = 'inline-block';
    $bomb4.style.display = 'inline-block';
    $bomb5.style.display = 'inline-block';
    $bomb6.style.display = 'inline-block';
    $bomb7.style.display = 'inline-block';
    $bomb8.style.display = 'inline-block';
    Timer();
    
    
    $background.src = "Img/Backgrounds/new background 1920x1080 v1.png";

}

$playerNameButton.onclick = () => {
    var $playerName = document.getElementById("playerNameInput").value;
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    return $playerName;
};


function Ball(a){
    this.x = getRandomX(); + 'px'
    this.y = getRandomY(); + 'px'
    a.style.position = 'absolute'
    a.style.left = this.x + 'px';
    a.style.top = this.y + 'px';
    console.log(this.x + ',' + this.y)
}
function Bomb(a){
    this.x = getRandomX(); + 'px'
    this.y = getRandomY(); + 'px'
    a.style.position = 'absolute'
    a.style.left = this.x + 'px';
    a.style.top = this.y + 'px';
    console.log(this.x + ',' + this.y)
}


window.addEventListener('load', () => {
    $playerSprite.style.position = 'absolute';
    $playerSprite.style.left = 960 + "px";
    $playerSprite.style.top = 500 + "px";
    var ball1 = new Ball($goodBall);
    var ball2 = new Ball($goodBall2);
    var ball3 = new Ball($goodBall3);
    var ball4 = new Ball($goodBall4);
    var ball5 = new Ball($goodBall5);
    var ball6 = new Ball($goodBall6);
    var ball7 = new Ball($goodBall7);
    var ball8 = new Ball($goodBall8);
    var bomb1 = new Bomb($bomb);
    var bomb2 = new Bomb($bomb2);
    var bomb3 = new Bomb($bomb3);
    var bomb4 = new Bomb($bomb4);
    var bomb5 = new Bomb($bomb5);
    var bomb6 = new Bomb($bomb6);
    var bomb7 = new Bomb($bomb7);
    var bomb8 = new Bomb($bomb8);
    

    
     
})

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

function moveBall(a)
{
    a.style.left = getRandomX() + 'px'
    a.style.top = getRandomY() + 'px'
};



function checkforCollision(){
    if(isCollideBall($playerSprite, $goodBall))
    {
        moveBall($goodBall);
        
    }else if(isCollideBall($playerSprite, $goodBall2))
    {
        moveBall($goodBall2);
          
    }else if (isCollideBall($playerSprite, $goodBall3))
    {
        moveBall($goodBall3);
        
    }else if(isCollideBall($playerSprite, $goodBall4))
    {
        moveBall($goodBall4);
        
    }else if(isCollideBall($playerSprite, $goodBall5))
    {
        moveBall($goodBall5);
        
    }else if(isCollideBall($playerSprite, $goodBall6))
    {
        moveBall($goodBall6);
        
    }else if(isCollideBall($playerSprite, $goodBall7))
    {
        moveBall($goodBall7);
        
    }else if(isCollideBall($playerSprite, $goodBall8))
    {
        moveBall($goodBall8)
        
    }else if(isCollideBall($playerSprite, $bomb))//////
    {
        moveBall($bomb);// replace with health -
        
        
    }else if(isCollideBall($playerSprite, $bomb2))
    {
        moveBall($bomb2);// replace with health -
        
          
    }else if (isCollideBall($playerSprite, $bomb3))
    {
        moveBall($bomb3);// replace with health -
        
        
    }else if(isCollideBall($playerSprite, $bomb4))
    {
        moveBall($bomb4);// replace with health -
        
        
    }else if(isCollideBall($playerSprite, $bomb5))
    {
        moveBall($bomb5);// replace with health -
       
        
    }else if(isCollideBall($playerSprite, $bomb6))
    {
        moveBall($bomb6);// replace with health -
       
        
    }else if(isCollideBall($playerSprite, $bomb7))
    {
        moveBall($bomb7);// replace with health -
        
        
    }else if(isCollideBall($playerSprite, $bomb8))
    {
        moveBall($bomb8);// replace with health -
          
    }
    
}

function moveBombs()
{
    console.log('movebomb is being called');
    $bomb.style.left = getRandomX() + 'px';
    $bomb.style.top = getRandomY() + 'px';
    $bomb2.style.left = getRandomX() + 'px';
    $bomb2.style.top = getRandomY() + 'px';
    $bomb3.style.left = getRandomX() + 'px';
    $bomb3.style.top = getRandomY() + 'px';
    $bomb4.style.left = getRandomX() + 'px';
    $bomb4.style.top = getRandomY() + 'px';
    $bomb5.style.left = getRandomX() + 'px';
    $bomb5.style.top = getRandomY() + 'px';
    $bomb6.style.left = getRandomX() + 'px';
    $bomb6.style.top = getRandomY() + 'px';
    $bomb7.style.left = getRandomX() + 'px';
    $bomb7.style.top = getRandomY() + 'px';
    $bomb8.style.left = getRandomX() + 'px';
    $bomb8.style.top = getRandomY() + 'px';
}

function Timer()
{
    intVar = setInterval(moveBombs, 3000)
}


window.addEventListener('keydown', (e) => {
    switch (e.key) { //Movement fuction detects when arrow keys down
        case 'ArrowLeft':
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

        case 'ArrowRight':
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

        case 'ArrowUp':
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

        case 'ArrowDown':
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
}
)

function getRandomInt(int){
    return Math.floor(Math.random() * Math.floor(int));
}

function getRandomX(){
    var coordX = getRandomInt(1600) + 380;
    var coordXstring = coordX.toString();
    var lasttwochar = coordXstring.slice(-2);
    var lasttwodigits = +(lasttwochar); 
    while (!(lasttwodigits % 5 === 0 && lasttwodigits % 4 === 0)){
        coordX = getRandomInt(1600) + 400;
        var coordXstring = coordX.toString();
        var lasttwochar = coordXstring.slice(-2);
        var lasttwodigits = +(lasttwochar); 
    }
    return coordX;
}

function getRandomY() {
    var coordY =  getRandomInt(841) + 100;
    var coordYstring = coordY.toString();
    var lasttwochar = coordYstring.slice(-2);
    var lasttwodigits = +(lasttwochar); 
    while (!(lasttwodigits % 5 === 0 && lasttwodigits % 4 === 0)){
        coordY =  getRandomInt(841) + 100;
        var coordYstring = coordY.toString();
        var lasttwochar = coordYstring.slice(-2);
        var lasttwodigits = +(lasttwochar); 
    }
    return coordY;
    }
