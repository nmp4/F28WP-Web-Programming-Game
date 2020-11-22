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
const $playerName = document.getElementById('playerNameInput').value;
let counter = 0;
var ball = []
let moveBy = 20;



$playerSprite.style.display = 'none'
$goodBall.style.display = 'none'
$goodBall2.style.display = 'none'
$goodBall3.style.display = 'none'
$goodBall4.style.display = 'none'
$goodBall5.style.display = 'none'
$goodBall6.style.display = 'none'
$goodBall7.style.display = 'none'
$goodBall8.style.display = 'none'



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
    
   /* ball.push(ball1)
    ball.push(ball2)
    ball.push(ball3)
    ball.push(ball4)
    ball.push(ball5)
    ball.push(ball6)
    ball.push(ball7)
    ball.push(ball8)*/
     
})

function isCollideBall (a, b){
    
   /* return !(
        ((parseInt(a.style.top) + parseInt(a.style.height)) < parseInt(b.style.top)) ||

        parseInt(a.style.top) > (parseInt(b.style.top) + parseInt(b.style.height)) ||

        (parseInt(a.style.left) + parseInt(a.style.width)) < parseInt(b.style.left) ||

        parseInt(a.style.left) > (parseInt(b.style.left) + parseInt(b.style.width))
        
    );*/

    if (parseInt(a.style.top) === parseInt(b.style.top) && parseInt(a.style.left) === parseInt(b.style.left))
    {
        console.log("same coords");
    }

    return (parseInt(a.style.top) === parseInt(b.style.top) && parseInt(a.style.left) === parseInt(b.style.left))


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
        
    }
    
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
