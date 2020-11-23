const $startButton = document.getElementById("startButton"); // DOM call for startbutton object
const $background = document.getElementById('background'); // DOM call for background object
const $playerNameInput = document.getElementById('playerNameInput'); // DOM call for name textbox object
const $playerNameButton = document.getElementById('playerNameButton'); // DOM call for enter text button object
const $playerSprite = document.getElementById('playerSprite'); // DOM call for player character object
const $goodBall = document.querySelector('#goodBall'); // DOM call for ball 1 object
const $goodBall2 = document.querySelector('#goodBall2'); // DOM call for ball 2 object
const $goodBall3 = document.querySelector('#goodBall3'); // DOM call for ball 3 object
const $goodBall4 = document.querySelector('#goodBall4'); // DOM call for ball 4 object
const $goodBall5 = document.querySelector('#goodBall5'); // DOM call for ball 5 object
const $goodBall6 = document.querySelector('#goodBall6'); // DOM call for ball 6 object
const $goodBall7 = document.querySelector('#goodBall7'); // DOM call for ball 7 object
const $goodBall8 = document.querySelector('#goodBall8'); // DOM call for ball 8 object
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
const $tnt = document.querySelector('#tnt')
const $tnt2 = document.querySelector('#tnt2')
const $tnt3 = document.querySelector('#tnt3')
const $tnt4 = document.querySelector('#tnt4')
const $tnt5 = document.querySelector('#tnt5')
const $playerName = document.getElementById('playerNameInput').value; //DOM call for player name value

var intVar; // variable to later store set interval

//let player = new Player($playerName, $playerSprite, $playerSprite.style.left,$playerSprite.style.top );


$playerSprite.style.display = 'none'; //hide player sprite
$goodBall.style.display = 'none'; //hide ball sprite
$goodBall2.style.display = 'none';// *     *     *
$goodBall3.style.display = 'none';// *     *     *
$goodBall4.style.display = 'none';// *     *     *
$goodBall5.style.display = 'none';// *     *     *
$goodBall6.style.display = 'none';// *     *     *
$goodBall7.style.display = 'none';// *     *     *
$goodBall8.style.display = 'none';// *     *     *
$bomb.style.display = 'none'; // hide bomb sprite
$bomb2.style.display = 'none';//  *    *      *
$bomb3.style.display = 'none';//  *    *      *
$bomb4.style.display = 'none';//  *    *      *
$bomb5.style.display = 'none';//  *    *      *
$bomb6.style.display = 'none';//  *    *      *
$bomb7.style.display = 'none';//  *    *      *
$bomb8.style.display = 'none';//  *    *      *
$bomb9.style.display = 'none';//  *    *      *
$bomb10.style.display = 'none';//  *    *      *
$bomb11.style.display = 'none';//  *    *      *
$bomb12.style.display = 'none';//  *    *      *
$bomb13.style.display = 'none';//  *    *      *
$tnt.style.display = 'none';//  *    *      *
$tnt2.style.display = 'none';//  *    *      *
$tnt3.style.display = 'none';//  *    *      *
$tnt4.style.display = 'none';//  *    *      *
$tnt5.style.display = 'none';//  *    *      *




$startButton.onclick = () => { //define clicking the start button as function
    $startButton.style.display = 'none'; // hide start button 
    $playerNameInput.style.display = 'none'; //hide text input 
    $playerNameButton.style.display = 'none'; //hide text input button
    $playerSprite.style.display = 'inline-block'; //show player sprite
    $goodBall.style.display = 'inline-block'; // show ball sprite
    $goodBall2.style.display = 'inline-block'; //  *   *      *
    $goodBall3.style.display = 'inline-block'; //  *   *      *
    $goodBall4.style.display = 'inline-block'; //  *   *      *
    $goodBall5.style.display = 'inline-block'; //  *   *      *
    $goodBall6.style.display = 'inline-block'; //  *   *      *
    $goodBall7.style.display = 'inline-block'; //  *   *      *
    $goodBall8.style.display = 'inline-block'; //  *   *      *
    $bomb.style.display = 'inline-block'; // show bomb sprite
    $bomb2.style.display = 'inline-block'; //  *    *     *
    $bomb3.style.display = 'inline-block'; //  *    *     *
    $bomb4.style.display = 'inline-block'; //  *    *     *
    $bomb5.style.display = 'inline-block'; //  *    *     *
    $bomb6.style.display = 'inline-block'; //  *    *     *
    $bomb7.style.display = 'inline-block'; //  *    *     *
    $bomb8.style.display = 'inline-block'; //  *    *     *
    $bomb9.style.display = 'inline-block'; //  *    *     *
    $bomb10.style.display = 'inline-block'; //  *    *     *
    $bomb11.style.display = 'inline-block'; //  *    *     *
    $bomb12.style.display = 'inline-block'; //  *    *     *
    $bomb13.style.display = 'inline-block'; //  *    *     *
    $tnt.style.display = 'inline-block'; //  *    *     *
    $tnt2.style.display = 'inline-block'; //  *    *     *
    $tnt3.style.display = 'inline-block'; //  *    *     *
    $tnt4.style.display = 'inline-block'; //  *    *     *
    $tnt5.style.display = 'inline-block'; //  *    *     *
     
    Timer(); //call timer function 
    $background.src = "Img/Backgrounds/new background 1920x1080 v1.png"; //change background image to in-game background

}

$playerNameButton.onclick = () => { //defiine clicking the enter name button as function
    $playerNameInput.style.display = 'none'; //hide text input
    $playerNameButton.style.display = 'none'; //hide text input button
};








export default class Game{
    constructor(){
        score = 0;
        playerSpeed = 20;
    }

    

      gameObject(a){ //creates ball object
        this.x = getRandomX(); + 'px' //get x coord from random int generator
        this.y = getRandomY(); + 'px' //get y coord from random int generator
        a.style.position = 'absolute' //create object on top of everything
        a.style.left = this.x + 'px'; //assign a
        a.style.top = this.y + 'px';
        console.log(this.x + ',' + this.y)
    }
    
      loadPlayer(){
        $playerSprite.style.position = 'absolute';
        $playerSprite.style.left = 1200 + "px";
        $playerSprite.style.top = 500 + "px";
    }
    
      loadBalls(){
        var ball1 = new gameObject($goodBall);
        var ball2 = new gameObject($goodBall2);
        var ball3 = new gameObject($goodBall3);
        var ball4 = new gameObject($goodBall4);
        var ball5 = new gameObject($goodBall5);
        var ball6 = new gameObject($goodBall6);
        var ball7 = new gameObject($goodBall7);
        var ball8 = new gameObject($goodBall8);
    }
    
      loadBombs(){
        var bomb1 = new gameObject($bomb);
        var bomb2 = new gameObject($bomb2);
        var bomb3 = new gameObject($bomb3);
        var bomb4 = new gameObject($bomb4);
        var bomb5 = new gameObject($bomb5);
        var bomb6 = new gameObject($bomb6);
        var bomb7 = new gameObject($bomb7);
        var bomb8 = new gameObject($bomb8);
        var bomb9 = new gameObject($bomb9);
        var bomb10 = new gameObject($bomb10);
        var bomb11 = new gameObject($bomb11);
        var bomb12 = new gameObject($bomb12);
        var bomb13 = new gameObject($bomb13);
    }
    
      loadTnt(){
        var tnt1 = new gameObject($tnt);
        var tnt2 = new gameObject($tnt2);
        var tnt3 = new gameObject($tnt3);
        var tnt4 = new gameObject($tnt4);
        var tnt5 = new gameObject($tnt5);
    }
    
    
      loadGame(){
    
        window.addEventListener('load', () => {
            loadPlayer();
            loadBalls();
            loadBombs();
            loadTnt();
         
        })
    }


      isCollideBall (a, b){
    
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
    
        return !(
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
        )
    
    
    }
    
      moveBall(a)
    {
        a.style.left = getRandomX() + 'px'
        a.style.top = getRandomY() + 'px'
    };
    
    
    
      checkforCollision(){
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
              
        }else if(isCollideBall($playerSprite, $bomb9))
        {
            moveBall($bomb9);// replace with health -
              
        }else if(isCollideBall($playerSprite, $bomb10))
        {
            moveBall($bomb10);// replace with health -
              
        }else if(isCollideBall($playerSprite, $bomb11))
        {
            moveBall($bomb11);// replace with health -
              
        }else if(isCollideBall($playerSprite, $bomb12))
        {
            moveBall($bomb12);// replace with health -
              
        }else if(isCollideBall($playerSprite, $bomb13))
        {
            moveBall($bomb13);// replace with health -
              
        }else if(isCollideBall($playerSprite, $tnt))
        {
            moveBall($tnt);// replace with health -
              
        }else if(isCollideBall($playerSprite, $tnt2))
        {
            moveBall($tnt2);// replace with health -
              
        }else if(isCollideBall($playerSprite, $tnt3))
        {
            moveBall($tnt3);// replace with health -
              
        }else if(isCollideBall($playerSprite, $tnt4))
        {
            moveBall($tnt4);// replace with health -
              
        }else if(isCollideBall($playerSprite, $tnt5))
        {
            moveBall($tnt5);// replace with health -
              
        }
        
    }
    
      moveBombs()
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
        $bomb9.style.left = getRandomX() + 'px';
        $bomb9.style.top = getRandomY() + 'px';
        $bomb10.style.left = getRandomX() + 'px';
        $bomb10.style.top = getRandomY() + 'px';
        $bomb11.style.left = getRandomX() + 'px';
        $bomb11.style.top = getRandomY() + 'px';
        $bomb12.style.left = getRandomX() + 'px';
        $bomb12.style.top = getRandomY() + 'px';
        $bomb13.style.left = getRandomX() + 'px';
        $bomb13.style.top = getRandomY() + 'px';
        $tnt.style.left = getRandomX() + 'px';
        $tnt.style.top = getRandomY() + 'px';
        $tnt2.style.left = getRandomX() + 'px';
        $tnt2.style.top = getRandomY() + 'px';
        $tnt3.style.left = getRandomX() + 'px';
        $tnt3.style.top = getRandomY() + 'px';
        $tnt4.style.left = getRandomX() + 'px';
        $tnt4.style.top = getRandomY() + 'px';
        $tnt5.style.left = getRandomX() + 'px';
        $tnt5.style.top = getRandomY() + 'px';
        
    }
    
      Timer()
    {
        intVar = setInterval(moveBombs, 3000)
    }
    
      getPlayerPos(){
    
        window.addEventListener('keydown', (e) => {
            switch (e.key) { //Movement fuction detects when arrow keys down
                case 'ArrowLeft':
                     this.playerSpeed = 20;
                    
                    checkforCollision()
                    if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                        $playerSprite.style.left = parseInt($playerSprite.style.left) -  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                        $playerSprite.style.left = parseInt($playerSprite.style.left) -  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                        $playerSprite.style.left = parseInt($playerSprite.style.left) -  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                        
                         this.playerSpeed = 0;
                    } else { //At no borders
                        $playerSprite.style.left = parseInt($playerSprite.style.left) -  this.playerSpeed + 'px'
                        
        
                    }
                    break;
        
                case 'ArrowRight':
                     this.playerSpeed = 20;
                    
                    checkforCollision()
                    if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                        $playerSprite.style.left = parseInt($playerSprite.style.left) +  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                        $playerSprite.style.left = parseInt($playerSprite.style.left) +  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                        $playerSprite.style.left = parseInt($playerSprite.style.left) +  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                         this.playerSpeed = 0;
                        
                    } else { //At no borders
                        $playerSprite.style.left = parseInt($playerSprite.style.left) +  this.playerSpeed + 'px';
                        
                    }
                    break;
        
                case 'ArrowUp':
                     this.playerSpeed = 20;
                    
                    checkforCollision()
                    if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                        $playerSprite.style.top = parseInt($playerSprite.style.top) -  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                        $playerSprite.style.top = parseInt($playerSprite.style.top) -  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                        $playerSprite.style.top = parseInt($playerSprite.style.top) -  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                         this.playerSpeed = 0;
                        
                    } else { //At no borders
                        $playerSprite.style.top = parseInt($playerSprite.style.top) -  this.playerSpeed + 'px'
                        
                    }
                    break;
        
                case 'ArrowDown':
                     this.playerSpeed = 20;
            
                    checkforCollision()
                    if ($playerSprite.style.left === 380 + 'px') { //if character at LEFT BORDER
                        $playerSprite.style.top = parseInt($playerSprite.style.top) +  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 60 + 'px') { //if character at TOP BORDER
                        $playerSprite.style.top = parseInt($playerSprite.style.top) +  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.left === 2080 + 'px') { //if character at RIGHT BORDER
                        $playerSprite.style.top = parseInt($playerSprite.style.top) +  this.playerSpeed + 'px'
                        
                    } else if ($playerSprite.style.top === 1000 + 'px') { //if character at BOTTOM BORDER
                         this.playerSpeed = 0;
                        
                    }else { //At no borders
                        $playerSprite.style.top = parseInt($playerSprite.style.top) +  this.playerSpeed + 'px'
                        
        
                    }
        
                    break;
            }
        }
        )
    
    }
    
    
      getRandomInt(int){
        return Math.floor(Math.random() * Math.floor(int));
    }
    
      getRandomX(){
        var coordX = getRandomInt(1600) + 380;
        ///var coordXstring = coordX.toString();
        ///var lasttwochar = coordXstring.slice(-2);
        ///var lasttwodigits = +(lasttwochar); 
        //while (!(lasttwodigits % 5 === 0 && lasttwodigits % 4 === 0)){
            //coordX = getRandomInt(1600) + 400;
            //var coordXstring = coordX.toString();
            //var lasttwochar = coordXstring.slice(-2);
            //var lasttwodigits = +(lasttwochar); 
        //}
        return coordX;
    }
    
      getRandomY() {
        var coordY =  getRandomInt(841) + 100;
        ///var coordYstring = coordY.toString();
        ///var lasttwochar = coordYstring.slice(-2);
        ///var lasttwodigits = +(lasttwochar); 
        //while (!(lasttwodigits % 5 === 0 && lasttwodigits % 4 === 0)){
            //coordY =  getRandomInt(841) + 100;
            //var coordYstring = coordY.toString();
            //var lasttwochar = coordYstring.slice(-2);
            //var lasttwodigits = +(lasttwochar); 
        //}
        return coordY;
        }
    
}


loadGame();
getPlayerPos();
