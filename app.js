let timerId = null;
let timeCount = document.querySelector('#timeCount');
let currentTime = document.querySelector('#current-time');

timeCount.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    clearInterval(timerId);
    let inputTime = Math.floor(parseFloat(timeCount.value));
    if (isNaN(inputTime)) {
      inputTime = 0;
    }
    currentTime.textContent = inputTime;
    timerId = setInterval(function() {
      inputTime--;
      if (inputTime < 0) {
        clearInterval(timerId);
        currentTime.textContent = 0;
      } else {
        currentTime.textContent = inputTime;
      }
    }, 1000);
  }
});
