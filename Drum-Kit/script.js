window.addEventListener ('keydown', function (e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if (!audio) return; //stop the function from running off together
audio.play();
audio.currentTime = 0; //rewind to the start
})