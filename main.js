let Number = document.querySelector('#Number');
let Increment = document.querySelector('#Increment');
let Reset = document.querySelector('#Reset');
let Decrement = document.querySelector('#Decrement')

Increment.addEventListener('click', () => {
  Number.textContent = parseInt(Number.textContent) + 1;
})
Decrement.addEventListener('click', () => {
  if (parseInt(Number.textContent) > 0) {
    Number.textContent -= 1;
  }else{
    Number.textContent = 0;
  }
  
})
Reset.addEventListener('click', () => {
  Number.textContent = 0;
})