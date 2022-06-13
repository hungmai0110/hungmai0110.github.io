// Câu 1:
const ul = document.getElementById("list");
// Thêm 1 nút "add"
const add = document.createElement("button");
add.innerText = "add";
document.body.insertAdjacentElement("beforebegin", add);

// Thêm 1 ô "input"
const input = document.createElement("input");
add.insertAdjacentElement("afterend", input);

// Lắng nghe sự kiện
add.addEventListener("click", function () {
  const inputEl = input.value;

  // Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
  if (!inputEl) {
    alert("Nội dung không được để trống");
  } else {
    // Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input
    // vào cuối danh sách ul
    const liNew = document.createElement("li");
    liNew.innerText = inputEl;
    ul.insertAdjacentElement("beforeend", liNew);
  }
});

// Câu 2: Thêm 1 nút "remove". Chức năng để xóa thẻ "li" cuối cùng của danh sách "ul"
// Thêm nút
const remove = document.createElement("button");
remove.innerText = "remove";
input.insertAdjacentElement("afterend", remove);

// Thêm chức năng
remove.addEventListener("click", function () {
  const liLast = document.querySelector("li:last-child");
  ul.removeChild(liLast);
});

// Câu 3:
// Thêm 1 nút Hide trên đầu của danh sách ul
const view = document.createElement("button");
view.innerText = "Hide";
ul.insertAdjacentElement("beforebegin", view);

view.addEventListener("click", function () {
  // Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
  if (ul.style.display == "block") {
    view.innerText = "Show";
    ul.style.display = "none";
  } else {
    // Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
    view.innerText = "Hide";
    ul.style.display = "block";
  }
});
