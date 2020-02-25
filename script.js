(function init() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    console.log("Image credit: Gabriel Barletta via Unsplash.com\nProject credit: Wesbos's JS30 series")
})();

function playSound(e) { 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]` );

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    console.log(audio);
    key.classList.add('playing'); 
}

function removeTransition(e) {
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);