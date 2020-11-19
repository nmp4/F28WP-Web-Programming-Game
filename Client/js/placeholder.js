const $startButton = document.getElementById('startButton')
const $background = document.getElementById('background')
const $playerName = document.getElementById('playerName')


$startButton.onclick = () => {
    $startButton.style.display = 'none'
    $playerName.style.display = 'none'
    $background.src = "Img/LoadingScreens/Wallpaper.jpg" 
    }
