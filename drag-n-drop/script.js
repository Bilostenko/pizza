const dragonsContainer = document.querySelector('.dragons');

dragonsContainer.onmousedown = e => {
  const target = e.target.closest('.dragon');
  if (!target) return;

  const shiftX = e.clientX - target.getBoundingClientRect().left;
  const shiftY = e.clientY - target.getBoundingClientRect().top;

  target.style.position = 'fixed';
  target.style.pointerEvents = 'none';
  // target.style.zIndex = 1000;

  moveAt(e.pageX, e.pageY);

  function moveAt(pageX, pageY) {
    target.style.left = pageX - shiftX + 'px';
    target.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  window.onmouseup = e => {
    document.removeEventListener('mousemove', onMouseMove);
    window.onmouseup = null;
    target.style.position = null;
    target.style.pointerEvents = null;

    if ( e.target.closest('.drop-zone') ) {
      const box = target.querySelector("input")
      box.checked = !box.checked
    }
  };
}

