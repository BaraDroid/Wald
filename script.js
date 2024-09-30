function music(){
    let audio=document.querySelector("audio")
    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
}