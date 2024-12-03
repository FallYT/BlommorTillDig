function waterPlant() {
  // Trigger flower growth animations
  document.querySelector('.seed').style.animation = 'plantSeed 2s forwards';
  document.querySelector('.stem').style.animation = 'growStem 4s forwards';
  document.querySelector('.leaves').style.animation = 'growLeaves 6s forwards';
  document.querySelector('.flower').style.animation = 'bloomFlower 6s forwards';
  document.querySelector('.card').style.animation = 'fallCard 8s forwards';
}
