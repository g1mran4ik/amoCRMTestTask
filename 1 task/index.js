const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const formatTime = (num) => Math.floor(num).toString().padStart(2, '0');

let interval = null;

const createTimerAnimator = () => {
  return (seconds) => {
    let timer = seconds;

    interval = setInterval(() => {
      
      let [hours, minutes, second] = [timer/(60*60) % 24, (timer/60) % 60, timer % 60].map(formatTime);
      
      timerEl.innerHTML = `${hours}:${minutes}:${second}`;

      if (--timer < 0) {
        clearInterval(interval);
      }
    }, 1000);

  }
};

const animateTimer = createTimerAnimator();

const debounce = (func, interval) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func(), interval);
  };
};

const convertInput = () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
};

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  const clearNotNums = debounce(convertInput, 1000);

  clearNotNums();
});

buttonEl.addEventListener('click', () => {
  clearInterval(interval);
  
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
