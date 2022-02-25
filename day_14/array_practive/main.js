// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// includes
function array(arr, numb) {
  return arr.includes(numb);
}
console.log(array([1, 2, 3, 4, 5], 5));

// indexOf
function array_01(arr, numb) {
  if (arr.indexOf(numb) == -1) {
    return false;
  }
  return true;
}
console.log(array_01([1, 2, 3, 4, 5], 6));

// For .. loop + if

function array_02(arr, numb) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == numb) {
      return true;
    }
  }
  return false;
}

console.log(array_02([1, 2, 3, 4, 5], 5));

// some()
// Chỉ cần 1 giá trị t/m ĐK -> true
// Không có giá trị nào -> false

function array_03(arr, numb) {
  return arr.some(function (value) {
    return value == numb;
  });
}

console.log(array_03([1, 2, 3, 4, 5], 5));

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ.
// Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

function getElementGreater(array, element) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > element) {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log(getElementGreater([1, 2, 3, 4, 5], 3));

// Bài 3: Viết function random 1 số nguyên trong khoảng min max bất kì
// randonNumber(3, 10)   ==> 4

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInteger(3, 10));

// Bài 4: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98

// Cách 1:
// # [0-9, a-f]

function randomHexCode_1() {
  let r = getRandomInteger(0, 255).toString(16);
  let g = getRandomInteger(0, 255).toString(16);
  let b = getRandomInteger(0, 255).toString(16);

  return `#${r}${g}${b}`;
}

console.log(randomHexCode_1());

// Cách 2:

// Viết function random 1 giá trị trong mảng
function randomElement(arr) {
  let index = Math.floor(Math.random() * arr.length); // ran dom chỉ số

  return arr[index]; // lấy giá trị dựa trên chỉ số
}

// Viết function random mã màu
function randomHexCode_2() {
  // Tạo mảng chứa các giá trị màu hex [0-9, a-f]
  let array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let hex_code = "";

  // Sử dụng vòng lặp 6 lần, mỗi lần random 1 giá trị
  for (let i = 0; i < 6; i++) {
    hex_code = hex_code + randomElement(array);
  }

  // Và cộng dồn chuỗi "#" ban đầu
  return `#${hex_code}`;
}

console.log(randomHexCode_2());

// Bài 5: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)

function randomRgbCode() {
  let res = [];
  for (let i = 0; i < 3; i++) {
    res[i] = Math.floor(Math.random() * 256);
  }
  return `rgb(${res.toString()})`;
}
console.log(randomRgbCode());

// Thực hành lại

// Bài 5: Viết function để tạo mã màu RGB ngẫu nhiên.
// randomRgbCode() => rgb(213,43,133)

function randomRgbCode_1(){
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr[i] = Math.floor(Math.random() * 256);
  }

  return `rgb(${arr.toString()})`;
}

console.log(randomRgbCode_1());

// Bài 4: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98

function randomElement_1(arr) {
  let index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

function randomHexCode_3() {
  let array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let hex_code = "";

  for (let i = 0; i < 6; i++) {
    hex_code += randomElement_1(array);
  }

  return `#${hex_code}`;
}

console.log(randomHexCode_3());

