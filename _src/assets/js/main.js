'use strict';

const buttonElement = document.querySelector('#update-button');
const selectElement = document.querySelector('#mood');
const faceElement = document.querySelector('#face');
const mainElement = document.querySelector('#main');

const getRandomNumber = max => Math.round(Math.random() * max);

const updateMood = () => {
    faceElement.innerHTML = selectElement.value;
    const randomNumber = getRandomNumber(100);
  if(randomNumber % 2 !== 0) {
    mainElement.classList.add('angry');
    console.log(randomNumber);
  } else {
    mainElement.classList.remove('angry');
    console.log(randomNumber);
  }
}


buttonElement.addEventListener('click',updateMood);

