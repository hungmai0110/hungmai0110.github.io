// Câu 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn
// (background = “yellow”)
const para = document.querySelector("p");

// Chuyển đoạn văn thành mảng gồm các chuỗi là các từ
const Words = para.innerText.split(" ");

// Tìm tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự
const findWords = Words.map((word) =>
  word.length >= 8
    ? `<span style="background-color:yellow">${word}</span>`
    : word
).join(" ");

para.innerHTML = findWords;

// Câu 2: Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const linkFb = document.createElement("a");
linkFb.innerText = "facebook";
linkFb.href = "https://www.facebook.com/";

para.insertAdjacentElement("afterend", linkFb);

// Câu 3: Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const counter = document.createElement("div");
document.body.insertAdjacentElement("afterbegin", counter);
counter.innerText = `Số từ có trong đoạn văn là: ${Words.length}`;

// Câu 4: Thay thế các ký hiệu ? => 🤔, ! => 😲
para.innerHTML = para.innerHTML.replace(/\!/g, "😲");
para.innerHTML = para.innerHTML.replace(/\?/g, "🤔");
