// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không.
// Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Cú pháp kiểm tra chuỗi có nằm trong chuỗi hay ko: String.includes(sub);
// console.log("dictionary".includes("i"));   // true

function checkStringExist(initial_Str, check_Str) {
  if (initial_Str.includes(check_Str) == true) {
    return true;
  } else {
    return false;
  }
}

console.log(checkStringExist("Hung Mai", "Mai"));

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách
// cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.
// Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

function shortenString(str) {
  if (str.length > 8) {
    str = str.substring(0, 8) + "...";
  } else {
    str = str;
  }
  return str;
}

console.log(shortenString("Never give up"));

// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem có phải chuỗi đối xứng hay không
//  (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng,
//         không phân biệt hoa thường), kết quả trả về true hoặc false.

// Ví dụ cắt chuỗi
let str = "Mai NgocHung";

// 1. cắt chuỗi với "slice"
str.slice(0, 5); //Mai N
str.slice(-2, 12); //ng

// 2. Tìm vị trí chuỗi với "indexOf"
str.indexOf("Ngoc"); // 4

// 3. Tìm vị trí kí tự trong chuỗi: "charAt"
str.charAt(11); // g

// 4. Chuyển về viết thường
str.toLowerCase(); // mai ngochung

// 5. Tính số kí tự:
str.length; // 12

// 6. Xóa kí tự trong chuỗi
// a, Xóa toàn bộ Kí tự "a" đầu tiên trong chuỗi
let str1 = "abcabc";
str1.replace(/a/g, ""); // bcbc
str1.split("a").join(""); // bcbc

// b, Xóa kí tự "a" đầu tiên trong chuỗi
str1.replace("a", ""); // bcabc

str.replace(/ /g, "").toLowerCase();

// 7. Đảo ngược chuỗi
// split(""): tách chuỗi thành 1 mảng các phần tử
// reverse(): đảo ngược 1 mảng tại chỗ
// join(""): nối tất cả các phần tử của mảng thành 1 chuỗi
str1.split("").reverse().join(""); // cbacba

// 8. Tách chuỗi
console.log("4123".split("").sort().reverse().join(""));

// 9. chuyển number sang string
let num = 8;
num.toString(10);

// Bài 3
function symmetricString(string) {
  let str = string.replace(/ /g, "").toLowerCase();
  let reverseStr = str.split("").reverse().join("");

  if (str == reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(symmetricString("MaiAem"));
console.log(symmetricString("Mai am"));

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó
// sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

function minNumber(num) {
  // B1: Convert số sang chuỗi
  let str = num.toString(10);

  // B2: Convert chuỗi sang mảng và sắp xếp theo thứ tự tăng dần
  let arrSort = str.split("").sort();

  // B3: Convert mảng thành chuỗi
  let strConvert = arrSort.join("");

  // B4: Sắp xếp lại
  let res = "";
  // Tìm ký tự đầu tiên khác 0. Tiến hành cắt và đưa lên trên đầu
  for (let i = 0; i < strConvert.length; i++) {
    if (strConvert[i] != "0") {
      res = strConvert[i] + strConvert.slice(0, i) + strConvert.slice(i + 1);
      break;
    }
    return Number(res); // convert chuỗi thành số
  }
}

console.log(minNumber(13960));

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ.
// Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

function snakeCaseString(string) {
  return (str = string.replace(/ /g, "_").toLowerCase());
}

console.log(snakeCaseString("Mai Ngoc Hung"));
