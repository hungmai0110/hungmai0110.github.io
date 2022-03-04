// 1.Truy cập vào thẻ h1 có id=“heading”
// thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.querySelector("#heading");

heading.style.color = "red";
heading.style.textTransform = "uppercase";

// 2.Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue”
// và có font-size = “20px”
const para = document.querySelectorAll("body > p");

for (let i = 0; i < para.length; i++) {
  para[i].style.color = "blue";
  para[i].style.fontSize = "20px";
}

// 3.Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”

// B1: Tạo thẻ
const linkFb = document.createElement("a");
// B2: Chèn nội dung và link
linkFb.innerText = "Facebook";
linkFb.href = "http://facebook.com";
// B3: Insert vào DOM
const content = document.querySelector(".content");
document.body.insertBefore(linkFb, content);

// 4.Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”

// B1: Lấy ra thẻ id="title"
const title = document.querySelector("#title");
// B2: Thay đổi nội dung
title.innerText = "Đây là thẻ tiêu đề";

// 5.Thêm class “text-bold” vào thẻ có class=“description”
// (định nghĩa class “text-bold” có tác dụng in đậm chữ)

// B1: Lấy ra nội dung phần tử
const description = document.querySelector(".content .description");
// B2: Thêm class "text-bold"
description.classList.add("text-bold");
// B3: Thêm thuộc tính
const textBold = document.querySelector(".text-bold");
textBold.style.fontWeight = "bold";

// 6.Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”

// B1: Tạo thẻ
const button = document.createElement("button");
button.innerText = "Click me";
// B2: Truy cập thẻ muốn thay thế
const para3 = document.querySelector(".para-3");
para3.parentElement.replaceChild(button, para3);

// 7.Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó

// B1: Copy
const para2 = document.querySelector(".para-2");
const para2Copy = para2.cloneNode(true);
// B2: Thêm
document.body.insertBefore(para2Copy, button);

// 8.Xóa thẻ có class=“para-1”
const para1 = document.querySelector(".para-1");
para1.parentElement.removeChild(para1);
