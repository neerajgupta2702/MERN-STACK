// script.js
const draggableText = document.getElementById('draggableText');

let offsetX, offsetY, isDragging = false;

draggableText.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableText.getBoundingClientRect().left;
  offsetY = e.clientY - draggableText.getBoundingClientRect().top;
  draggableText.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  draggableText.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggableText.style.cursor = 'grab';
});
