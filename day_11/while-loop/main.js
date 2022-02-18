// Thực hiện kế hoạch trong 30 ngày
// for (let day = 1; day <= 30; day = day + 1) {
//         console.log(`Ngày ${day} thức dậy lúc 5h`);
//       }

// Sử dụng While
let day = 1; // Giá trị khởi tạo

while (day <= 30) {
  console.log(`Ngày ${day} thức dậy lúc 5h`);

  day = day + 1; // cập nhật giá trị mới
}

// Chỉ thức dậy lúc 5h vào ngày lẻ còn ngày chẵn thức dậy lúc 7h
let day1 = 1;

while (day1 <= 30) {
  if (day1 % 2 == 1) {
    console.log(`Ngày ${day1} thức dậy lúc 5h`);

    day1++;
  } else {
    console.log(`Ngày ${day1} thức dậy lúc 7h`);

    day1++;
  }
}

// Thức dậy lúc 5h, đến ngày số 20 chán quá nên bỏ
let day2 = 1;

while (day2 <= 30) {
  if (day2 == 20) {
    console.log("Chán quá bỏ");
    break;

    day2++;
  } else {
    console.log(`Ngày ${day2} thức dậy lúc 5h`);

    day2++;
  }
}

// Thức dậy lúc 5h, với các ngày chủ nhật thì không cần thực hiện
let day3 = 1;

while (day3 <= 30) {
  if (day3 % 7 == 0) {
    console.log("Nghỉ xả hơi");
    day3 = day3 + 1;
    continue;
  }
  console.log(`Ngày ${day3} thức dậy lúc 5h`);

  day3++;
}

// Sử dụng do-while
let day4 = 1; //Giá trị khởi tạo
do {
  console.log(`Ngày ${day4} thức dậy lúc 5h`);

  day4++; // cập nhật giá trị mới
} while (day4 <= 30);
 