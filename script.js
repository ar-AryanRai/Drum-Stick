function playSound(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');
key.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
