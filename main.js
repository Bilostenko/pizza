/* ingradients */
const cheese = document.querySelector('#cheese');
const chiken = document.querySelector('#chiken');
const corn = document.querySelector('#corn');
const ketchup = document.querySelector('#ketchup');
const mayonnaise = document.querySelector('#mayonnaise');
const mustard = document.querySelector('#mustard');
const pepperoni = document.querySelector('#pepperoni');
const pepper = document.querySelector('#pepper');
const pineapple = document.querySelector('#pineapple');

const dropZone = document.querySelector('.pizza__base');
dropZone.ondragover = allowDrop;
function allowDrop(event) {
  event.preventDefault();
}
