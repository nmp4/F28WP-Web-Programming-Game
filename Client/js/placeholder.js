const $startButton = document.getElementById("startButton")
const $background = document.getElementById('background')
const $playerNameInput = document.getElementById('playerNameInput')
const $playerNameButton = document.createElement('playerNameButton')
let moveBy = 10;


$startButton.onclick = () => {
    $startButton.style.display = 'none';
    $playerNameInput.style.display = 'none';
    $background.src = "Img/LoadingScreens/Wallpaper.jpg";
}

$playerNameButton.onclick = () => {
    var $playerName = document.getElementById("playerNameInput").value;
    $playerNameInput.style.display = 'none';
    $playerNameButton.style.display = 'none';
    return $playerName;
};

window.addEventListener('Load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 960;
    circle.style.top = 540;
});

window.addEventListener('keydown', (e) => {switch (e.key) { //Movement fuction detects when arrow keys are
    case 'ArrowLeft':
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px'
        break;
    case 'ArrowRight':
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
        break;
    case 'ArrowUp':
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
        break;
    case 'ArrowDown':
        circle.style.top = parseInt($circle.style.top) + moveBy + 'px'
        break;
    case 'ArrowDown' && 'ArrowRight':
        circle.style.top = parseInt(circle.style.top) + moveBy + 'px'
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
        break;
    case 'ArrowDown' && 'ArrowLeft':
        circle.style.top = parseInt(circle.style.top) + moveBy + 'px'
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px'
        break;
    case 'ArrowUp' && 'ArrowRight':
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
        break;
    case 'ArrowUp' && 'ArrowLeft':
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
        circle.style.top = parseInt(circle.style.left) - moveBy + 'px'
        break;

    

}})   
