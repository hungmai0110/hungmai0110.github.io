// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 30000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showInfoProduct = (products) => {
  products.forEach((product) => {
    console.log(
      `${product.name} - ${product.price} - ${product.brand}- ${product.count}`
    );
  });
};

showInfoProduct(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
const totalMoney = (products) => {
  let tottal = 0;
  products.forEach((product) => {
    tottal += product.price * product.count;
  });
  return tottal;
};

console.log(totalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProductApple = (products) => {
  return products.filter((product) => product.brand == "Apple");
};

console.log(findProductApple(products));

// 4. Tìm các sản phẩm có giá > 20000000
const findPriceProduct = (products) => {
  return products.filter((product) => product.price > 20000000);
};

console.log(findPriceProduct(products));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findProductPro = (products) => {
  return products.filter((product) => {
    // Chuyển tên về viết thường
    let newNameProduct = product.name.toLowerCase();

    // Tìm sản phẩm có chữ "pro"
    if (newNameProduct.includes("pro")) {
      return newNameProduct;
    }
  });
};

console.log(findProductPro(products));

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deleteSamsung = (products) => {
  return products.filter((product) => product.brand != "Samsung");
};

console.log(deleteSamsung(products));

// 8. Sắp xếp giỏ hàng theo price tăng dần
const sortPriceAsceding = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

console.log(sortPriceAsceding(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần
const sortCountDecrease = (products) => {
  return products.sort((a, b) => b.count - a.count);
};

console.log(sortCountDecrease(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const randomProduct = (products) => {
  // Random chỉ số
  let i = Math.floor(Math.random() * 4);
  let j = Math.floor(Math.random() * 4);
  if (i != j) {
    return [products[i], products[j]];
  }
};

console.log(randomProduct(products));

