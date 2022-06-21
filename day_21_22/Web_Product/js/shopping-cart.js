// Truy cập
const productList = document.querySelector(".product-list");
const message = document.querySelector(".message");

const subTotalMoneyEl = document.getElementById("sub-total-money");
const totalMoneyEl = document.getElementById("total-money");

const discountInputEl = document.getElementById("discount-form-input");
const btnApply = document.getElementById("btn-apply");

// Format tiền VND
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

// Danh sách promotion code (Mã giảm giá)
let discountCode = {
  A: 10,
  B: 20,
  C: 30,
  D: 40,
};
// Lấy ra sản phẩm có trong giỏ hàng
let items = getDataFromLocalStorage();

// 1. Hiển thị danh sách ra ngoài giao diện
const renderProduct = () => {
  // Kiểm tra giỏ hàng rỗng hay không
  if (items.length == 0) {
    productList.classList.add("d-none");
  } else {
    message.classList.add("d-none");
  }

  // Nếu có sản phẩm thì hiển thị
  let html = "";

  items.forEach((p) => {
    html += `<div class="product-item d-flex border mb-4">
        <div class="image">
          <img
            src="${p.image}"
            alt="${p.name}"
          />
        </div>
        <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
          <div>
            <div
              class="d-flex justify-content-between align-items-center">
              <h2 class="text-dark fs-5 fw-normal">
                ${p.name} (${p.size})
              </h2>
              <h2 class="text-danger fs-5 fw-normal">
              ${formatMoney(p.price)}</h2>
            </div>
            <p class="text-black-50">
              <span class="border d-inline-block me-3">
                <span class="py-2 px-3 d-inline-block fw-bold bg-light"
                onclick="(minusCount(${p.id}, '${p.size}'))">-</span>
                <span class="py-2 px-3 d-inline-block fw-bold">${p.count}</span>
                <span class="py-2 px-3 d-inline-block fw-bold bg-light"
                onclick="(plusCount(${p.id}, '${p.size}'))">+</span>
              </span>
            </p>
          </div>
          <div>
            <button class="text-primary border-0 bg-transparent fw-light">
              <span><i class="fa-solid fa-trash-can" 
              onclick="(deleteProduct(${p.id}, '${p.size}'))"></i></span>
              Xóa
            </button>
          </div>
        </div>
      </div>`;
  });

  productList.innerHTML = html;

  // Cập nhật số tiền
  updateTotalMoney(items);
};

// 2. Xóa sản phẩm
const deleteProduct = (id, size) => {
  let isConfirm = confirm("Bạn có muốn xóa không?");

  if (isConfirm) {
    // Tìm kiếm sản phẩm trùng id và size
    items = items.filter((p) => p.id != id || p.size != size);

    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);

    // Cập nhật lại số lượng
    updateTotalCart();

    // Hiển thị lại giao diện
    renderProduct(items);
  }
};

// 3. Thay đổi số lượng
// Tăng số lượng
const plusCount = (id, size) => {
  // Lấy ra sản phẩm tương ứng
  let product = items.find((p) => p.id == id && p.size == size);

  // Tăng số lượng
  product.count++;

  // Lưu lại vào localStorage
  setDataFromLocalStorage(items);

  // Hiển thị lại giao diện
  renderProduct(items);
};

// Giảm số lượng
const minusCount = (id, size) => {
  // Lấy ra sản phẩm tương ứng
  let product = items.find((p) => p.id == id && p.size == size);

  // Tăng số lượng
  product.count--;

  if (product.count < 1) {
    product.count = 1;
  }

  // Lưu lại vào localStorage
  setDataFromLocalStorage(items);

  // Hiển thị lại giao diện
  renderProduct(items);
};

// 4. Tính tiền
// Kiểm tra mã giảm giá
const checkDiscount = () => {
  let key = discountInputEl.value;
  if (discountCode[key]) {
    return discountCode[key];
  } else {
    return 0;
  }
};

// Tính tiền
const updateTotalMoney = (arr) => {
  // Tính tổng tiền tạm tính
  let subTotalMoney = 0;
  arr.forEach((p) => (subTotalMoney += p.count * p.price));

  // Tính thành tiền
  let totalMoney = 0;

  // Kiểm tra mã giảm giá
  let data = checkDiscount();

  totalMoney = ((100 - data) / 100) * subTotalMoney;

  // Cập nhật trên giao diện
  subTotalMoneyEl.innerText = formatMoney(subTotalMoney);
  totalMoneyEl.innerText = formatMoney(totalMoney);
};

// Lắng nghe sự kiện ấn nút "áp dụng"
btnApply.addEventListener("click", () => {
  updateTotalMoney(items);
});

// Lắng nghe sự kiện ấn phím "Enter"
discountInputEl.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    updateTotalMoney(items);
  }
});

// Cập nhật tiền
updateTotalMoney(items);

// Hiển thị
renderProduct(items);
