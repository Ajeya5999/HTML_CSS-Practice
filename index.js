// Getting elements on the HTML page

    // Getting Playlist Carousel Elements

const btnLeft = document.getElementById("rotate-left");
const btnRight = document.getElementById("rotate-right");
const playlistCarousel = document.getElementById("playlist-carousel");
var rotationValue = 0;

// Adding Event Listeners

    // Playlist Carousel Evenet Listeners

btnLeft.addEventListener('click', function(){
    handlebtn(true);
});

btnRight.addEventListener('click', function(){
    handlebtn(false);
})

//Functions

    //Playlsit Carousel Functions

function handlebtn(isLeft){  
    console.log("The value is " + rotationValue);
    if(isLeft){
        rotationValue -= 60;
    }
    else{
        rotationValue += 60;
    }
    playlistCarousel.style = "transform: rotateY("+ rotationValue + "deg)";
}