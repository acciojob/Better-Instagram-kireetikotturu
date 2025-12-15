let dragged = null;

document.querySelectorAll(".image").forEach((item) => {

  item.addEventListener("dragstart", function () {
    dragged = this;
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault(); // REQUIRED
  });

  item.addEventListener("drop", function (e) {
    e.preventDefault();

    if (dragged === this) return;

    // READ from computed style
    const draggedBg = window.getComputedStyle(dragged).backgroundImage;
    const targetBg = window.getComputedStyle(this).backgroundImage;

    // WRITE as inline style
    dragged.style.backgroundImage = targetBg;
    this.style.backgroundImage = draggedBg;
  });

});
