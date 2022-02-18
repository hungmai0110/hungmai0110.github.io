// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

function repeatString1(string1) {
  let loopResult1 = "";

  for (let i = 1; i <= 10; i++) {
    loopResult1 += `${string1}`;
  }

  return loopResult1;
}

console.log(repeatString1("a"));

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ,
// hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

function repeatString2(string2) {
  let loopResult2 = "";

  for (let i = 1; i <= 10; i++) {
    if (i < 10) {
      loopResult2 += `${string2}-`;
    } else {
      loopResult2 += `${string2}`;
    }
  }

  return loopResult2;
}

console.log(repeatString2("a"));

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1,
// hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

function repeatString3(string3, num1) {
  let loopResult3 = "";

  for (let i = 1; i <= num1; i++) {
    if (i < num1) {
      loopResult3 += `${string3}-`;
    } else {
      loopResult3 += `${string3}`;
    }
  }

  return loopResult3;
}

console.log(repeatString3("a", 5));

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
let num2 = 0;
let sum1 = 0;

while (num2 <= 100) {
  if (num2 % 5 == 0) {
    sum1 += num2;

    num2 += 1;
  } else {
    num2 += 1;
  }
}

console.log(sum1);

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function tinhTheTichHinhCau(r) {
  return (4 / 3) * Math.PI * r * r * r;
}

console.log(tinhTheTichHinhCau(3));

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
// Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function tinhTongCacSoNguyenDuongNamGiua(num3, num4) {
  let sum2 = 0;
  let k = Math.abs(num4 - num3);

  for (let i = 1; i < k; i++) {
    if (num4 >= num3) {
      num3 += 1;
      sum2 += num3;
    } else {
      num3 -= 1;
      sum2 += num3;
    }
  }

  return sum2;
}

console.log(tinhTongCacSoNguyenDuongNamGiua(3, 8));
console.log(tinhTongCacSoNguyenDuongNamGiua(8, 3));

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không,
// kết quả trả về true hoặc false.

function checkNumber(num5) {
  if (num5 < 2) {
    result = "false";
  } else if (num5 == 2) {
    result = "true";
  } else {
    for (let i = 3; i < num5 - 1; i++) {
      if (num5 % i == 0) {
        result = "false";
        break;
      } else {
        result = "true";
      }
    }
  }

  return result;
}

console.log(checkNumber(2));

// Bài 8: Cho 1 số nguyên dương bất kỳ.
// Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function tinhTongCacSoNguyenToNhoHon(num6) {
  if (num6 < 2) {
    sum3 = 0;
    return sum3;
  } else if (num6 == 2) {
    sum3 = 2;
    return sum3;
  } else {
    let sum4 = 2;

    for (let i = 3; i <= num6; i++) {
      if (num6 % i == 0) {
       
        continue;
      }
      return sum4;
    }
  }
}

console.log(tinhTongCacSoNguyenToNhoHon(15));

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tinhTongCacUocSo(num7) {
  let sum5 = 0;

  for (let i = 1; i <= num7; i++) {
    if (num7 % i == 0) {
      sum5 += i;
    }
  }

  return sum5;
}

console.log(tinhTongCacUocSo(9));
