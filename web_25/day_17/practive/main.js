// Câu 1:
// Truy cập vào thẻ h1 có id=“heading”
const h1 = document.getElementById("heading");
// Thay đổi màu chữ thành ‘red’
h1.style.color = "red";
// In hoa nội dung của thẻ đó
h1.style.textTransform = " uppercase";

// Câu 2:
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paras = document.getElementsByClassName("para");

Array.from(paras).forEach((ele) => {
  ele.style.color = "blue";
  ele.style.fontSize = "20px";
});

// Câu 3:
//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
// Tạo thẻ "a"
const linkFb = document.createElement("a");
linkFb.innerText = "Trang Facebook";
linkFb.href = "https://www.facebook.com/";
// Thêm thẻ "a"
const para3 = document.querySelector("p:nth-child(4)");
para3.insertAdjacentElement("afterend", linkFb);

// Câu 4:
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const h2 = document.getElementById("title");
h2.innerText = "Đây là thẻ tiêu dề";

// Câu 5:
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.getElementsByClassName("description");
console.log(description);
// description.classList.add("text-bold");

// Câu 6:
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
// Tạo button
const button = document.createElement("button");
button.innerText = "Click me";
// Thay thế
para3.parentNode.replaceChild(button, para3);

// Câu 7:
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector("p:nth-child(3)");
const para2Copy = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", para2Copy);

// Câu 8:
// Xóa thẻ có class=“para-1”
// const para1 = document.querySelector("p:first-child");
const para1 = document.querySelector("p:nth-child(2)");
document.body.removeChild(para1);
