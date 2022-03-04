// Hay dùng cách 1,4,5
// 1.Truy cập thông qua id - trả về phần tử duy nhất
const heading = document.getElementById("heading");
console.log(heading);

// 2.TagName - trả về nhiều phần tử
const paraTagName = document.getElementsByTagName("p");
console.log(paraTagName);
console.log(paraTagName[0]);
console.log(paraTagName.length);

// for bình thường thì ok
for (let i = 0; i < paraTagName.length; i++) {
  console.log(paraTagName[i]);
}

// map: Không áp dụng trực tiếp được
// paraTagName.map((p) => console.log(p));

// Muốn áp dụng được thì phải convert paraTagName => array
Array.from(paraTagName).map((p) => console.log(p));

// 3.ClassName - tính chất tương tự như TagName
const paraClassName = document.getElementsByClassName("para");
console.log(paraClassName);

// 4.querySelector: Trả về phần tử đầu tiên mà nó tìm thấy <=> find
// h1
// #heading
// h1#heading
const headingSelector = document.querySelector("#heading");
console.log(headingSelector);

const para2 = document.querySelector(".para");
console.log(para2);

// p:ntn-chid(4) nghĩa là thẻ p dòng thứ 4
const para3 = document.querySelector("p:nth-child(4)");
console.log(para3);

// Dấu cách là cha con
const ul1 = document.querySelector(".box ul");
console.log(ul1);

// Dấu ~ hoặc dấu + là mối quan hệ anh em ngay sau
// nth-child(6)
// body > ul: con trực tiếp
const ul2 = document.querySelector(".box+ul");
console.log(ul2);

const li33 = document.querySelector(".li + li");
console.log(li33);

// ul > li:last-child
const li44 = document.querySelector(".li +li+li");
console.log(li44);

// 5.querySelectorAll: trả về nhiều phần tử
const paraSelectorAll = document.querySelectorAll("p");
console.log(paraSelectorAll);

// Truy cập cục bộ
// Muốn truy cập thẻ ul nằm trong class "box"
const box = document.querySelector(".box");
const ulInsideBox = box.querySelector("ul");
console.log(ulInsideBox);

// Truy cập gián tiếp
// Lấy ra cha của ul
console.log(ulInsideBox.parentElement);

// Lấy ra con đầu tiên của ul
console.log(ulInsideBox.firstElementChild);

// Lấy ra con cuối cùng của ul
console.log(ulInsideBox.lastElementChild);

// Lấy ra anh em liền kề phía trước thẻ box
console.log(box.previousElementSibling);

// Lấy ra anh em liền kề phía sau thẻ box
console.log(box.nextElementSibling);
