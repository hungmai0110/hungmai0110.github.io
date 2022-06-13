// 1. Lấy ra nội dung của 1 phần tử
// Heading
const heading = document.querySelector("#heading");

console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

// Ul nằm trong box
const ul1 = document.querySelector(".box ul");

// Nội dung giống hệt trong code HTML
console.log(ul1.innerHTML);

// Không lấy ra được thẻ ẩn
console.log(ul1.innerText);

// Giữ nguyên format
console.log(ul1.textContent);

// 2. Thay đổi nội dung của 1 phần tử
// Sử dụng 1 trong 3 cách

// heading.innerHTML = "Xin chào";
// heading.innerText
// heading.textContent

heading.innerHTML = "<span>Hello</span>";

// 3. Thay đổi CSS của 1 phần tử
// Thuộc tính thay đổi sẽ là inline style
heading.style.color = "red";
heading.style.backgroundColor = "black";
heading.style.fontSize = "50px";

// 4. Edit 1 phần tử: Tạo - thêm - xóa - thay thế - copy
// 4.1 Tạo
// Tạo ra thẻ p có nội dung là "Thẻ para 4"

// B1: tạo thẻ
const para4 = document.createElement("p");
// B2: Chèn nội dung cho thẻ
para4.innerText = "Thẻ para 4";

console.log(para4);

// Tạo thẻ a, link đến trang google.com, có text là "google"
const link = document.createElement("a");
link.innerText = "google";
link.href = "https://ww.google.com";
// target: "_blank" là mở sang tab khác
link.target = "_blank";

console.log(link);

// 4.2 Thêm
// prepend: thêm vào đầu phần tử của cha
document.body.prepend(para4);

// appendChild: thêm vào cuối phần tử của cha
document.body.appendChild(para4);

// inserBefore
const box = document.querySelector(".box");

document.body.insertBefore(link, box);

// Chèn thẻ li, có nội dung "Thẻ li new" vào giữa li 33 và 44

// B1: tạo thẻ
const liNew = document.createElement("li");
// B2: chèn nội dung
liNew.innerText = "Thẻ li new";
// B3: Insert vào DOM
const ul = document.querySelector(".box ul");
const li44 = document.querySelector("ul li:last-child");
ul.insertBefore(liNew, li44);

// insertAdjacentHTML
// Chèn thẻ button có nội dung là "Đăng nhập" vào đằng sau thẻ box

// Cách 1:
// box.insertAdjacentHTML("afterend", "<button>Đăng nhập</button>");

// Cách 2:
const ul2 = document.querySelector("body>ul");
ul2.insertAdjacentHTML("beforebegin", "<button>Đăng nhập</button>");

// insertAdjacentElement
const button = document.createElement("button");
button.innerText = "Đăng ký";
heading.insertAdjacentElement("afterend", button);

// 4.3 Xóa
// Xóa thẻ p1
// Cách 1
const para1 = document.querySelector("p");
document.body.removeChild(para1);

// Cách 2: truy cập gián tiếp cha
// document.body <=> para1.parentElement
// para1.parentElement.removeChild(para1);

// 4.4 Thay thế
// Thay thế "thẻ para2" bằng thẻ a link đến trang facebook.com
const linkFb = document.createElement("a");
linkFb.innerText = "facebook";
linkFb.href = "http://facebook.com";

// Truy cập thẻ muốn thấy thế và cha của nó
const para2 = document.querySelector(".para");
para2.parentElement.replaceChild(linkFb, para2);

// 4.5 Copy
// Copy box và chèn vào cuối body
const boxCopy = box.cloneNode(true);
// const boxCopy1 = box.cloneNode(false);

// console.log(boxCopy);
// console.log(boxCopy1);

document.body.appendChild(boxCopy);
