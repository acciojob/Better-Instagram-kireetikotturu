let draggedElement = null;

const items = document.querySelectorAll(".image");

items.forEach((item) => {

  item.addEventListener("dragstart", function () {
    draggedElement = this;
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  item.addEventListener("drop", function (e) {
    e.preventDefault();

    if (draggedElement !== this) {
      const draggedBg = draggedElement.style.backgroundImage;
      const targetBg = this.style.backgroundImage;

      draggedElement.style.backgroundImage = targetBg;
      this.style.backgroundImage = draggedBg;
    }
  });

});
