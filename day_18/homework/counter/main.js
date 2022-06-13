// Giá trị mặc định của counter ban đầu = 0
let counterEl = 0;
const counter = document.getElementById("counter");

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red
function changeColor() {
  if (counterEl > 0) {
    counter.style.color = "green";
  } else if (counterEl == 0) {
    counter.style.color = "#333333";
  } else {
    counter.style.color = "red";
  }
}

// Bấm vào Cộng tăng counter lên 1
const nextBtn = document.querySelector(".nextBtn");

nextBtn.addEventListener("click", function () {
  counterEl++;
  counter.innerText = `${counterEl}`;
  changeColor();
});

// Bấm vào Trừ giảm counter đi 1
const prevBtn = document.querySelector(".prevBtn");

prevBtn.addEventListener("click", function () {
  counterEl--;
  counter.innerText = `${counterEl}`;
  changeColor();
});

