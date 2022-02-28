// Bài 1 (1 điểm).
// Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

const max2Numbers = (array) => {
  // Sắp xếp mảng theo giá trị giảm dần
  let sortArray = array.sort((a, b) => b - a);

  // Lấy ra phần tử đầu tiên khác sortArray[0] là số lớn thứ nhì
  for (let i = 1; i < sortArray.length; i++) {
    if (sortArray[i] != sortArray[0]) {
      max2 = sortArray[i];
      break;
    }
  }
  return max2;
};

console.log(max2Numbers([2, 1, 3, 4]));
console.log(max2Numbers([2, 1, 4, 3, 4]));

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ.
// Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

const getStringHasMaxLength = (array) => {
  return array.filter((string) => {
          
  });
};

console.log(getStringHasMaxLength(["aba", "aa", "ad", "c", "vcd"]));
// Bài 3 (1 điểm).
// Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

const getRandomElement = (array) => {
  // Lấy chỉ số ngẫu nhiên
  let index = Math.floor(Math.random() * array.length);

  // Lấy 1 phần tử ngẫu nhiên
  return array[index];
};

console.log(getRandomElement([3, 7, 9, 11]));

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ.
// Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

const similarity = (arr1, arr2) => {
  // Tạo mảng trả về kết quả
  let result = [];

  // Kiểm tra xem phần tử trong mảng 1 có nằm trong mảng 2 không, có thì lấy

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
};

console.log(similarity([1, 2, 3], [1, 2, 4]));

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// Bài 6 (2 điểm). Cho mảng users như sau:

let users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

// Lấy ra những user có age > 25 và isStatus = true
// Dùng filter() để lọc
const findUser = (users) => {
  return users.filter((user) => user.age > 25 && user.isStatus == true);
};

console.log(findUser(users));

// Hãy sắp xếp mảng users có age tăng dần
// Dùng hàm sort()
const sortUser = (users) => {
  return users.sort((a, b) => a.age - b.age);
};

console.log(sortUser(users));

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi.
// Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

const getCountElement = (arr) => {
  // B1: Tạo mảng mới gồm các chuỗi không trùng nhau
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // Kiểm tra từng phần tử của vòng lặp
    // Nêu phần tử đó nằm trong result -> bỏ qua
    // Nếu phần tử đó không nằm trong result -> push vào
    if (result.includes(arr[i]) == false) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
