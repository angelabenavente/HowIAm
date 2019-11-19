'use strict';

const buttonElement = document.querySelector('#update-button');
const selectElement = document.querySelector('#mood');
const faceElement = document.querySelector('#face');
const mainElement = document.querySelector('#main');

const updateMood = () => {
    faceElement.innerHTML = selectElement.value;
  if(selectElement.value === ':(') {
    mainElement.classList.add('angry');
    console.log(randomNumber);
  } else {
    mainElement.classList.remove('angry');
    console.log(randomNumber);
  }
}

buttonElement.addEventListener('click',updateMood);

