// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

function repeatString(string) {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += string;
  }

  return result;
}

console.log(repeatString("a"));

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ,
// hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

function stringSymbol(string) {
  let res = string;
  for (let i = 1; i < 10; i++) {
    res += "-" + string;
  }
  return res;
}

console.log(stringSymbol("Ab"));

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1,
// hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

function repeatString2(str, n) {
  let repeatStr = "";
  for (let i = 1; i <= n; i++) {
    repeatStr = repeatStr + str;
    if (i < n) {
      repeatStr = repeatStr + "-";
    }
  }
  return repeatStr;
}

console.log(repeatString2("a", 5));

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum() {
  let tong = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
      tong = tong + i;
    }
  }
  return tong;
}

console.log(sum());

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
//  Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function sum_01(a, b) {
  let sum_01 = 0;
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      sum_01 = sum_01 + i;
    }
  } else {
    // for (let i = a-1; i > b; i--) {
    //     sum_01 = sum_01 + i;
    // }
    for (let i = b + 1; i < a; i++) {
      sum_01 = sum_01 + i;
    }
  }
  return sum_01;
}
console.log(sum_01(3, 8));
console.log(sum_01(8, 3));

function sum_02(a, b) {
  let total = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min + 1; i < max; i++) {
    total += i;
  }
  return total;
}

console.log(sum_02(3, 8));
console.log(sum_02(8, 3));

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không,
// kết quả trả về true hoặc false.

function kiemTraSoNguyenTo(num) {
  let count = 0;
  if (num < 2) {
    return false;
  }
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(kiemTraSoNguyenTo(5));
console.log(kiemTraSoNguyenTo(2));
console.log(kiemTraSoNguyenTo(4));

// Bài 8: Cho 1 số nguyên dương bất kỳ.
// Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function sumSNT(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (kiemTraSoNguyenTo(i) == true) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumSNT(15));

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function tinhTongUocSo(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(tinhTongUocSo(9));
