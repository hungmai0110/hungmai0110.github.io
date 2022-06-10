// 1. Truy cập thông qua id
const heading = document.getElementById("heading");
console.log(heading);

// 2. Truy cập thông qua Tagname
// Kết quả trả về là HTML collection -> giống như mảng, bản chất ko phải là mảng
// HTML collection là tập hợp các Node ở dạng Element Node
// Node: Element Node, Text Node, Comment Node,...
const paras = document.getElementsByTagName("p");
console.log(paras);

console.log(paras[0]); // truy cập para1

// Duyệt HTML collection
for (let i = 0; i < paras.length; i++) {
  console.log(paras[i]);
}

Array.from(paras).forEach((element) => {
  console.log(element);
});

// 3. Truy cập thông qua Classname
const parasClassName = document.getElementsByClassName("para");
console.log(parasClassName);

// 4. Truy cập thông qua CSS Selector
const h1 = document.querySelector("#heading");
console.log(h1);

const para1 = document.querySelector("p");
console.log(para1);

const para2 = document.querySelector(".para");
console.log(para2);

const para3 = document.querySelector("p:nth-child(4)");
console.log(para3);

const ul2 = document.querySelector(".box+ul");
console.log(ul2);

const ul1 = document.querySelector("ul");
console.log(ul1);

// 5. Truy cập thông qua CSS SelectorAll
// const li2 = document.querySelectorAll("body > ul li");

const li2 = ul2.querySelectorAll("li");
console.log(li2);

// Node.parentNode:  tham chiếu đến nút cha của nút hiện tại
// Node.childNodes:  tham chiếu đến các nút con trực tiếp của nút hiện tại
// Node.firstChild:  tham chiếu đến nút con đầu tiên của nút hiện tại
// Node.lastChild: tham chiếu đến nút con cuối cùng của nút hiện tại
// Node.nextSibling: tham chiếu đến nút anh em nằm liền kề sau với nút hiện tại.
// Node.previousSibling: tham chiếu đến nút anh em nằm liền kề trước với nút hiện tại.

console.log(ul2.firstElementChild);
console.log(ul2.previousElementSibling);

// 6. Thay đổi thuộc tính
// Sẽ thành inline style
heading.style.color = "red";
heading.style.backgroundColor = "black";

for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = "blue";
}

// 7. Lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

console.log(ul1.innerHTML); // lấy ra cả HTML
console.log(ul1.innerText); // lấy ra nội dung thẻ
console.log(ul1.textContent); // lấy ra nội dung thẻ, giữ được định dạng HTML và thẻ ẩn

// 8. Thay đổi nội dung
heading.innerHTML = "<span>Xin chào</span>";
heading.innerText = "Hello";

// 9. Thêm nội dung
// appendChild() : Thêm phần tử vào cuối của phần tử cha
// prepend() : Thêm phần tử vào đầu của phần tử cha
// insertBefore() : Thêm phần tử vào trong phần tử cha và trước phần tử được chỉ được
document.body.prepend(para1);
document.body.appendChild(para1);

const box = document.querySelector(".box");
box.appendChild(para1);

document.body.insertBefore(para1, para3);

// 10. Tạo và thêm phần tử DOM
// VD1: Tạo thẻ a (google)
const link = document.createElement("a");
link.innerText = "Trang Google";
link.href = "https://www.google.com/";
document.body.prepend(link);
document.body.insertBefore(link, ul2);

// VD2: Tạo thẻ input, type="text", placehoder="Entername"
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Entername";

document.body.insertBefore(input, para2);

// targetElement.insertAdjacentHTML(position, text);
// targetElement.insertAdjacentElement(position, element);
// targetElement.insertAdjacentText(position, text);

// beforebegin : Vị trí trước targetElement.
// afterbegin : Bên trong targetElement, trước first child.
// beforeend : Bên trong targetElement, sau last child.
// afterend : Vị trí trước targetElement

document.body.insertAdjacentElement("afterbegin", link);
box.insertAdjacentHTML("afterend", "<button>Click me</button>");

// Sử dụng vòng lặp để tạo nội dung và insert
let links = [
  {
    link: "https://www.facebook.com/",
    title: "Trang Facebook",
  },
  {
    link: "https://chat.zalo.me/",
    title: "Trang Twiter",
  },
  {
    link: "https://www.w3schools.com/cssref/css_selectors.asp",
    title: "Trang Instagram",
  },
];

// Truy cập
const socialMedia = document.querySelector(".social-media");

// Cách 1: Tạo thẻ => chèn
// links.forEach(ele => {
//   const link = document.createElement("a");
//   link.innerText = ele.title;
//   link.href = ele.link;

//   socialMedia.appendChild(link);
// });

// Cách 2: Insert trực tiếp HTML
// links.forEach((ele) => {
//   socialMedia.insertAdjacentHTML(
//     "beforeend",
//     `<a href="${ele.link}">${ele.title}</a>`
//   );
// });

// Cách 3: Sử dụng innerHTML
// let html = "";
// links.forEach((ele) => {
//   html += `<a href="${ele.link}">${ele.title}</a>`;
// });

// socialMedia.innerHTML = html;

// Cách 4:
links.forEach((ele) => {
  socialMedia.innerHTML += `<a href="${ele.link}">${ele.title}</a>`;
});

// 11. Xóa phần tử: removeChild
document.body.removeChild(heading);

// 12. Thay thế
const h3 = document.createElement("h3");
h3.innerText = "Đây là thẻ h3";

document.body.replaceChild(h3, para3);

// 13. Sao chép
const boxCopyTrue = box.cloneNode(true);
const boxCopyFalse = box.cloneNode(false);

console.log(boxCopyTrue);
console.log(boxCopyFalse);

document.body.prepend(boxCopyTrue);
