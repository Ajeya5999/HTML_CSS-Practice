// Getting elements on the HTML page

    // Getting Playlist Carousel Elements

const btnLeft = document.getElementById("rotate-left");
const btnRight = document.getElementById("rotate-right");
const playlistCarousel = document.getElementById("playlist-carousel");
var rotationValue = 0;

    // Getting Music Player View Elements

const btnViewPlayer = document.getElementById("latest-release-track-button");
const queueContent = document.getElementById("queue-content");
const musicPlayer = document.getElementById("music-player");
const playerSpace = document.getElementById("music-player-space");

// Adding Event Listeners

    // Playlist Carousel Evenet Listeners

btnLeft.addEventListener('click', function(){
    handlebtn(true);
});

btnRight.addEventListener('click', function(){
    handlebtn(false);
})

    // Music Player Event Listners

btnViewPlayer.addEventListener('click', viewPlayer);

//Functions

    //Playlsit Carousel Functions

function handlebtn(isLeft){  
    if(isLeft){
        rotationValue -= 60;
    }
    else{
        rotationValue += 60;
    }
    playlistCarousel.style = `transform: rotateY(${rotationValue}deg)`;
}

    // Music Player Function

function viewPlayer(){
    queueContent.style = "height: 69.6vh"
    musicPlayer.style = "visibility: visible";
    playerSpace.style = "height: 60px";
}