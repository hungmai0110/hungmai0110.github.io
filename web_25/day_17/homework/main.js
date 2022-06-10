// Câu 1:
// Tạo 1 thẻ p có id=“text”
// Đặt màu văn bản thành #777
const text = document.getElementById("text");
text.style.color = "#777";
// Đặt kích thước phông chữ thành 2rem
text.style.fontSize = "2rem";
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
text.innerHTML =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

// Câu 2:
// Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue
const li = document.querySelectorAll("li");
console.log(li);
Array.from(li).forEach((ele) => {
  ele.style.color = "blue";
});

// Câu 3:
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const list = document.getElementById("list");
for (let i = 7; i < 10; i++) {
  list.insertAdjacentHTML("beforeend", `<li>Item ${i + 1}</li>`);
}
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = list.querySelector("li");
li1.style.color = "red";
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = list.querySelector("li:nth-child(3)");
li3.style.backgroundColor = "green";
// Remove thẻ <li> 4
const li4 = list.querySelector("li:nth-child(4)");
list.removeChild(li4);
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const li4New = document.createElement("li");
li4New.innerText = "Item 4 New";
li3.insertAdjacentElement("afterend", li4New);
