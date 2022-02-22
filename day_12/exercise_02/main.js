// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó

// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function tinhGiaiThua(n) {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}

console.log(tinhGiaiThua(5));

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

// Ví dụ: reverseString(‘hello’) => olleh
// function reverseString(str) {
//   str = str.reverse(str);
//   return str;
// }

// console.log(reverseString("hello"));

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”,
// tương ứng với mã quốc gia được truyền vào

// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”

function sayHello(national) {
  switch (national) {
    case "VN": {
      console.log("Xin chào");
      break;
    }
    case "EN": {
      console.log("Hello");
      break;
    }
    case "CHINA": {
      console.log("Ni hao");
      break;
    }
    case "KOREA": {
      console.log("à nhong");
      break;
    }
  }
  return national;
}

console.log(sayHello("VN"));

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi,
// lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”

function catChuoi(str) {
  str = str.slice(0, 10) + "...";
  return str;
}

console.log(catChuoi("xinchaocacbandenvoiTechmaster"));

// Bài 5: Viết function in ra màn hình các số từ 1 đến 100
// sao cho những giá trị là chẵn sẽ có màu xanh,
// những giá trị là lẻ có màu đỏ.

// Gợi ý : sử dụng document.write()

function printNumber() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      document.write(`<span style="color:red">${i}</span>`);
    } else {
      document.write(`<span style="color:blue">${i}</span>`);
    }
  }
}
printNumber();
