let money = 14000;

// "break" là thoát khỏi switch-case khi có kết quả phù hợp
switch (money) {
  case 12000:
  case 14000: {
    console.log("Cafe sữa");
    break;
  }
  case 10000: {
    console.log("Cafe Đá");
    break;
  }
  case 8000: {
    console.log("Sting Dâu");
    break;
  }
  case 2000: {
    console.log("Trà Đá");
    break;
  }
  default: {
    console.log("Không có đồ uống nào phù hợp");
    break;
  }
}

// Bài tập 1

// Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần
// Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)
// Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
// Ví dụ: day = 6 --> “Hôm nay là thứ 7”

let day = 4;

switch (day) {
  case 0: {
    console.log("Chủ nhật");
    break;
  }
  case 1: {
    console.log("Thứ Hai");
    break;
  }
  case 2: {
    console.log("Thứ Ba");
    break;
  }
  case 3: {
    console.log("Thứ Tư");
    break;
  }
  case 4: {
    console.log("Thứ Năm");
    break;
  }
  case 5: {
    console.log("Thứ Sáu");
    break;
  }
  default: {
    console.log("Thứ Bảy");
    break;
  }
}

// Bài tập 2
// Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
// Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
// 1, 2, 3 : Mùa xuân
// 4, 5, 6 : Mùa hạ
// 7, 8, 9 : Mùa thu
// 10, 11, 12 : Mùa đông
// Ví dụ: month = 9 --> “Mùa thu”

let month = 11;

switch (month) {
  case 1:
  case 2:
  case 3: {
    console.log("Mùa Xuân");
    break;
  }
  case 4:
  case 5:
  case 6: {
    console.log("Mùa Hè");
    break;
  }
  case 7:
  case 8:
  case 9: {
    console.log("Mùa Thu");
    break;
  }
  case 10:
  case 11:
  case 12: {
    console.log("Mùa Đông");
    break;
  }
}
