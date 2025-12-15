let draggedElement = null;

const images = document.querySelectorAll(".image");

images.forEach((img) => {
  img.addEventListener("dragstart", dragStart);
  img.addEventListener("dragover", dragOver);
  img.addEventListener("drop", drop);
  img.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  draggedElement = this;
  this.classList.add("selected");
}

function dragOver(e) {
  e.preventDefault(); // Allow drop
}

function drop(e) {
  e.preventDefault();

  if (draggedElement !== this) {
    // Swap background images
    const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
    const targetBg = window.getComputedStyle(this).backgroundImage;

    draggedElement.style.backgroundImage = targetBg;
    this.style.backgroundImage = draggedBg;
  }
}

function dragEnd() {
  this.classList.remove("selected");
  draggedElement = null;
}
