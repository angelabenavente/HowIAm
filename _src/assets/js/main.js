'use strict';

const buttonElement = document.querySelector('#update-button');
const selectElement = document.querySelector('#mood');
const faceElement = document.querySelector('#face');

const random = Math.random();
console.log(Math.round(random));

const updateMood = () => {
  faceElement.innerHTML = selectElement.value;

}

buttonElement.addEventListener('click', updateMood);
console.log('hola');
