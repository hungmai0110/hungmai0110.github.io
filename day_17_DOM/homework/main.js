//  Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ
//  (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

const text = document.querySelector("#text");

// Đặt màu văn bản thành #777
text.style.color = "#777";

// Đặt kích thước phông chữ thành 2rem
text.style.fontSize = "2rem";

// Đặt nội dung HTML thành
// "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
text.innerHTML =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue
const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  li[i].style.color = "blue";
}

// Câu 3. Sử dụng javascript để thực hiện những công việc sau
const list = document.querySelector("#list");

// 3.1 Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
list.insertAdjacentHTML(
  "beforeend",
  "<li>Item 8</li><li>Item 9</li><li>Item 10</li>"
);

// 3.2 Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = list.querySelector("li");
li1.style.color = "red";

// 3.3 Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = list.querySelector("ul li:nth-child(3)");
li3.style.backgroundColor = "Blue";

// 3.4 Remove thẻ <li> 4
const li4 = list.querySelector("ul li:nth-child(4)");
li4.parentElement.removeChild(li4);

// 3.5 Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước,
// thẻ <li> mới có nội dung bất kỳ

// B1: Thẻ li5 nằm ở vị trí thứ 4 vì đã xóa li4
const li5 = list.querySelector("ul li:nth-child(4)");

// B2: Tạo thẻ li4New
const li4New = document.createElement("li");
li4New.innerText = "Thẻ li 4 mới thay thế";

// B3: Insert DOM
li5.parentElement.insertBefore(li4New, li5);
