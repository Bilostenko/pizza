// const dragItems = document.querySelectorAll(".drag-item");
// const dropContainer = document.querySelector(".drop-container");
// const hiddenInput = document.querySelectorAll('.ingredient');
// const layer = document.querySelector('.layer');
// /* layer.style.display = 'block'; */

// // Обработчик события dragstart для элементов, которые можно перетаскивать
// function dragStartHandler(e) {
//   e.dataTransfer.setData("text/plain", e.target.id);
//   e.currentTarget.classList.add("dragging");
// }

// // Обработчик события dragend для элементов, которые можно перетаскивать
// function dragEndHandler(e) {
//   e.currentTarget.classList.remove("dragging");
// }

// // Обработчик события dragover для контейнера, в который можно бросать элементы
// function dragOverHandler(e) {
//   e.preventDefault();
// }

// // Обработчик события drop для контейнера, в который можно бросать элементы
// function dropHandler(e) { 
//   e.preventDefault();
//   const data = e.dataTransfer.getData("text/plain");
//   const draggedItem = document.getElementById(data);

//   // Добавляем стиль display:block ко всем элементам li с классом drag-item
//   const dragItems = document.querySelectorAll('.drag-item');
//   dragItems.forEach(item => {
//     item.style.display = 'block';
//   });

//   e.currentTarget.appendChild(draggedItem);
// }

// // Добавляем обработчики событий для всех элементов, которые можно перетаскивать
// dragItems.forEach((item) => {
//   item.addEventListener("dragstart", dragStartHandler);
//   item.addEventListener("dragend", dragEndHandler);
// });

// // Добавляем обработчики событий для контейнера, в который можно бросать элементы
// dropContainer.addEventListener("dragover", dragOverHandler);
// dropContainer.addEventListener("drop", dropHandler);

const dragItems = document.querySelectorAll('.drag-item');
const dropContainer = document.querySelector('.drop-container');

dragItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('dragenter', dragEnter);
dropContainer.addEventListener('dragleave', dragLeave);
dropContainer.addEventListener('drop', drop);

let draggedItem = null;

function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.opacity = '0.6';
  }, 0);
}

function dragEnd() {
  draggedItem = null;
  this.style.opacity = '1';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  const input = draggedItem.querySelector('input[type="checkbox"]');
  input.checked = true;
  this.classList.remove('hovered');
}