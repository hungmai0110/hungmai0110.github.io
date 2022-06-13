// Khi người dùng nhập password và bấm nút “Show”,
// lúc này hiển thị password và nội dung button chuyển từ “Show” --> “Hide”
// Ngược lại khi người dùng bấm vào nút “Hide”,
// lúc này ẩn password và nội dung button chuyển từ “Hide” --> “Show”

const buttonEl = document.querySelector("button");
const input = document.querySelector("input");

buttonEl.addEventListener("click", function () {
  if (input.type == "password") {
    buttonEl.innerText = "Hide";
    input.type = "text";
  } else {
    buttonEl.innerText = "Show";
    input.type = "password";
  }
});
