// Thực hiện kế hoạch trong 30 ngày
for (let day = 1; day <= 30; day = day + 1) {
  console.log(`Ngày ${day} thức dậy lúc 5h`);
}

// Chỉ thức dậy lúc 5h vào ngày lẻ còn ngày chẵn thức dậy lúc 7h
for (let day = 1; day <= 30; day = day + 1) {
  if (day % 2 == 1) {
    console.log(`Ngày ${day} thức dậy lúc 5h`);
  } else {
    console.log(`Ngày ${day} thức dậy lúc 7h`);
  }
}

// break được sử dụng để kết thúc vòng lặp.
// Thức dậy lúc 5h, đến ngày số 20 chán quá nên bỏ
for (let day = 1; day <= 30; day = day + 1) {
  if (day == 20) {
    console.log("Chán quá, không thực hiện");
    break;
  }
  console.log(`Ngày ${day} thức dậy lúc 5h`);
}

// continue được sử dụng để bỏ qua một vòng lặp hiện tại.
// Thức dậy lúc 5h, với các ngày chủ nhật thì không cần thực hiện
// day++ <==> day + 1
// money = money + 100000 <==> money += 100000
for (let day = 1; day <= 30; day = day + 1) {
  if (day % 7 == 0) {
    console.log("Nghỉ xả hơi");
    continue;
  }
  console.log(`Ngày ${day} thức dậy lúc 5h`);
}

// Ví dụ thực hiện tiết kiệm tiền trong 10 ngày
// Mỗi ngày tiết kiệm 100.000 VND
// Tổng 10 ngày: 1.000.000 VND
// Trước khi bắt đầu, số tiền có = 0
let money = 0;

for (let day = 1; day <= 10; day++) {
  money = money + 100000; // số tiền hôm nay bằng số tiền những ngày trước đó + 100.000
}

console.log(money);

// 1. Nếu ngày lẻ tiết kiệm 100.000, ngày chẵn tiết kiệm 200.000
let money1 = 0;

for (let day = 1; day <= 30; day++) {
  if (day % 2 == 1) {
    money1 = money1 + 100000;
  } else {
    money1 = money1 + 200000;
  }
}

console.log(money1);

// 2. Thực hiện tiết kiệm 100.000 đến ngày 8 dừng lại
let money2 = 0;

for (let day = 1; day <= 30; day++) {
  if (day >= 8) {
    break;
  } else {
    money2 = money2 + 100000;
  }
}

console.log(money2);
// 3. Chỉ thực hiện tiết kiệm 100.000 vào ngày chẵn, ngày lẻ bỏ
let money3 = 0;

for (let day = 1; day <= 30; day++) {
  if (day % 2 == 1) {
    continue;
  } else {
    money3 += 100000;
  }
}
console.log(money3);
