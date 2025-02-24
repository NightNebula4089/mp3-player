
var playing = false
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
var count = 0
var audioElement = new Audio("../audio/trialfile.mp3")

async function startplaying(){
    if(audioElement.paused){
        audioElement.play()
    } else {
        audioElement.pause()
    }
    playing = !playing
    var img = document.getElementById("albumcover")
    console.log("Hello I am working")
    while(playing){
        if(count == 360){
            count = 0;
        }
        count = count + 0.1;
        img.style.setProperty('rotate',count+'deg')
        await sleep(5)
        console.log(count)
    }

}


