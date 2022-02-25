// Bài 1. Viết function vào 1 mảng tên học viên,
// sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

function sortStudents(arr) {
  // Sắp xếp theo bảng chữ cái rồi đảo ngược lại
  let sortArr = arr.sort().reverse();

  return sortArr;
}

console.log(sortStudents(["Nam", "Hoa", "Tuấn"]));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]

function shuffle(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length); // random chỉ số

  for (let i = 0; i < arr.length; i++) {
    if (i != randomIndex) {
      let temporaryValue = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6]));

// Bài 3: Viết function để lấy số phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function symmetricDifference(firstArr, secondArr) {
  let array = [];

  // Tìm các phần tử ở mảng 1 không xuất hiện ở mảng 2 và ngược lại
  for (let i = 0; i < firstArr.length; i++) {
    if (secondArr.includes(firstArr[i]) == false) {
      array.push(firstArr[i]);
    }
  }

  for (let j = 0; j < secondArr.length; j++) {
    if (firstArr.includes(secondArr[j]) == false) {
      array.push(secondArr[j]);
    }
  }

  return array;
}

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(firstArr, secondArr) {
  // Gộp 2 mảng lại với nhau
  let array = firstArr.concat(secondArr);
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    // Lọc các phần tử giống nhau
    // Nếu vị trí phần tử trùng vị trí (đầu tiên) phần tử đó thì lấy phần tử đó
    if (i == array.indexOf(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(union([1, 2, 3, 1], [4, 3, 2, 1, 4]));
