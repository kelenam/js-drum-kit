(function init() {
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => {
    key.addEventListener("click", playSound);
    key.addEventListener("transitionend", removeTransition);
  });

  console.log(
    `Image credit: Gabriel Barletta via Unsplash.com\nProject credit: Wesbos's JS30 series`
  );
})();

function playSound(e) {
  let keyCode = e.keyCode;

  if (e.type === "click") {
    keyCode = this.dataset.key;
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
