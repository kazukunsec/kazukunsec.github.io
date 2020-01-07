
window.onload = function() {
    var audio = new Audio('https://21233.live.streamtheworld.com/LOS40AAC.aac?dist=onlineradiobox');

    if (audio){
        document.getElementById("españa").addEventListener("click", playPause,false);
    }

    function playPause() { 
        
        if (audio.paused) {
            audio.play();
        }
        else  {
            audio.pause(); 
        }
        
    }
} 

console.log("hola");