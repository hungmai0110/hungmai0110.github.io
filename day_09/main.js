// Khai báo biến
// Nếu khai báo biến ko có giá trị thì biến sẽ nhận kiểu dữ liệu undefined
// C1: khai báo 2 bước
let name;
console.log(name);
// Gán giá trị cho biến
name="Bui Hien";
console.log(name);
// C2: vừa khia báo biến vừa gán giá trị cho biến
let email = "hien@techmaster.vn";
console.log(email);
// Khai báo biến sd hằng số
const pi = 3.14;
console.log(pi);

console.log(typeof name);
console.log(typeof email);
console.log(typeof pi);

// Khai báo chuỗi rỗng
let emtyString = "";

// Cộng chuỗi
let firstName = "Bùi";
let lastName = "Hiến";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Bản chất số 10 sẽ thành chuỗi và cộng 2 chuỗi
console.log(fullName + 10 + 20); 

// Nan: not a number
// Dấu "+" biến số thành chuỗi
// Các dấu khác sẽ biến chuỗi thành số nếu được, nếu ko thì kết quả là Nan
console.log(10 + 20 + fullName); 
console.log("20"-"10");

// "**" nghĩa là lũy thừa
console.log(3**5);

// Muốn dùng dấu "" thì phải dùng dấu /
let message_1 = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";
console.log(message_1);

let message_2 = "Xin chào các bạn, " +
"mình tên là \"Bùi Hiên\". " +
"Mình sinh năm 1997";
console.log(message_2);

// Bài tập biểu thức 1:
// null: giá trị rỗng, ko tồn tại
// boolean: true or false
console.log(""+1+0)
console.log(""-1+0)
console.log(true + false)
console.log(6/"3")
console.log("2" * "3")
console.log(4+5+"px")
console.log("$"+4+5)
console.log("4"-2)
console.log("4px" - 2)
console.log(7/0)
console.log("-9"+5)
console.log("-9"-5)
console.log(null+1)
console.log(undefined + 1 )
console.log(typeof(7) + 1 )
console.log(typeof "9" + 5)

// Template String,dấu ``
// 1. Bên trong dấu `` như nào thì hiển thị như vậy
let message_3 = `Xin chào các bạn, 
mình tên là "Bùi Hiên". 
Mình sinh năm 1997`;
console.log(message_3);

// 2. Sử dụng dấu ``,bên trong ${biến}
let name_4 = "Bùi Hiên";
let year = "1997";
let message_4 = `Xin chào các bạn, mình tên là "${name_4}". Mình sinh năm ${year}`;
console.log(message_4);

// Bài tập biểu thức 2:
let a = 1;
let b = 22;
let name_5 = "John";

console.log(b + a);
console.log(a + name_5);
console.log(a + name_5 + b);
console.log(a + b + name_5);
console.log(name_5 + a);
console.log(name_5 + a + b);
console.log(name_5 + (a + b));
console.log(`Hello ${name_5}`);
console.log(`${name_5} + 1`);
console.log(`${name_5 + 1}`);
console.log(`${name_5 + a}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${1 + 2}`);
console.log(`1 + 2 = ${1 + 2}`);
console.log(`1 + 2 = ${a + b}`);

// Chỉ thực hiện phép tính trong dấu $
console.log(`${name_5 + a}`)
console.log(`a + b = ${a + b}`);
console.log(`1 + 2 = ${1 + 2}`);
console.log(`Hello ${name_5}`);
console.log(`1 + 2 + ${1 + 2}`);

let num1 = 10;
let num2 = 5;

// %: chia lấy phần dư
console.log(num1 % num2);

// Một số ví dụ về Math Object

// 1. Math.PI
console.log(Math.PI); // 3.141592653589793

// 2. Math.ceil : Làm tròn lên
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(1.7)); // 2

// 3. Math.floor : Làm tròn xuống
console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.6)); // 2

// 4. Math.round : Làm tròn bình thường
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.6)); // 3

// 5. Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số
console.log(Math.min(2, 4, 1, 6, 7)); // 1

// 6. Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số
console.log(Math.max(2, 4, 1, 6, 7)); // 7

// 7. Math.pow(a, b) : Số mũ (a^b)
console.log(Math.pow(2, 3)); // 8

// 8. Math.sqrt(number) : Căn bậc 2
console.log(Math.sqrt(9)); // 3

