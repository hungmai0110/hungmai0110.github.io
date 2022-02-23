// Bài 1: Tìm số lớn nhất trong mảng

function maxElement(array) {
  // Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let max = array[0];

  // So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

console.log(maxElement([5, 4, 9, 2, 8, 7, 3])); // 9

// Bài 2: Tìm số bé nhất trong mảng

function minElement(array) {
  // Giả định vị trí số bé nhất là số đầu tiên của mảng.
  let min = array[0];

  // So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

console.log(minElement([5, 4, 9, 2, 8, 7, 3])); // 2

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số,
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

function remainderDivision(array) {
  let remainderArray= array.map(function (num) {
    return num % 2;
  });
  return remainderArray;
}

console.log(remainderDivision([2, 5, 7, 9, 15]));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function repeatString(string) {
  let str = string.repeat(10);
  return str;
}

console.log(repeatString("Hello"));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, 
// ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

function repeatStr(string){
        let str1 = string + "-";
        let str2 = str1.repeat(9);
        return str2 + string;
}

console.log(repeatStr("a"));


let numbers1 = [5, 3, 6, 1, 2];
numbers1.sort(function (a, b) {
    return b - a;
});
console.log(numbers1);