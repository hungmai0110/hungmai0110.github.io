// document.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });

// document.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

// document.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });

// document.addEventListener("click", function (event) {
//   console.log(event);
// });

document.addEventListener("click", function (event) {
  // Xóa hình tròn (nếu có)
  const boxEl = document.querySelector(".box");

  if (boxEl) {
    boxEl.parentElement.removeChild(boxEl);
  }
  
  // B1:Tạo ra hình tròn
  let box = document.createElement("div");
  box.classList.add("box");

  // B2: Gắn tọa độ
  console.log(event);
  box.style.top = `${event.offsetY - 50}px`;
  box.style.left = `${event.offsetX - 50}px`;

  // B3: Gắn vào DOM
  document.body.prepend(box);
});
