window.addEventListener("keydown", function(e){
    console.log (e.keyCode)
    let audio = document.getElementById (e.keyCode)
    if(!audio){return;}
    audio.play()
})