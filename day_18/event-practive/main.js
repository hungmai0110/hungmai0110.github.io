// 1. Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ
const btn1 = document.getElementById("btn-1");
const para = document.querySelector("p");

let content = ["1", "2", "3"];
const changeContent = () => {
  let i = Math.floor(Math.random() * content.length);
  para.innerText = content[i];
};

// 2. Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p
// (sử dụng màu HEX - cần viết 1 function để random màu HEX)
const btn2 = document.getElementById("btn-2");

// Random màu Hex
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Thay đổi màu
const changeColor = () => {
  para.style.color = getRandomColor();
};

btn2.onclick = changeColor;

// 3. Khi nhấn vào button “Change background” thì thay đổi màu của thẻ p
// (sử dụng màu RGB - cần viết 1 function để random màu RGB)
const btn3 = document.getElementById("btn-3");

// Random màu RGB
const random255 = () => Math.floor(Math.random() * 255);

const randomRGB = () => {
  const r = random255();
  const g = random255();
  const b = random255();

  return `rgb(${r}, ${g}, ${b})`;
};

// Thay đổi background
btn3.addEventListener("click", function () {
  para.style.backgroundColor = randomRGB();
});
