var startButton = document.getElementById("startButton");

//document.getElementById("gameWindow").style.opacity = 0;


startButton.onclick = function(){ // when start button is clicked
    document.getElementById("startButton").style.opacity = 0; //hide all menu elements
    document.getElementById("titleCard").style.opacity = 0; // hide title card
    document.getElementById("background").style.opacity = 0; // hide background
    //document.getElementById("gameWindow").style.opacity = 100; // Change game to fully visible
};

function getuserName(){
    var userName = document.getElementById("nameInput").value;
};
