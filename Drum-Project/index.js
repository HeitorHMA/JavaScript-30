window.addEventListener("keydown", function(e){
    console.log (e.keyCode)
    let audio = document.getElementById (e.keyCode)
    let key = document.getElementById (`k${e.keyCode}`)
    if(!audio){return;}
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    this.setTimeout (function(){
    key.classList.remove('playing')
}, 300);
})

