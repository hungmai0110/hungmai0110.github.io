// Function

// Định nghĩa function
function sayHello() {
        console.log("Xin chào")
}

// Thực thi function
sayHello()

// Function có 1 tham số
function sayHelloWithName(name) {
        console.log(`Xin chào ${name}`);
}
sayHelloWithName("Nguyen Van A");
sayHelloWithName("Tran Thi C");

// Function có 2 tham số
function sayHelloWithNameAndYear(name, year) {
        console.log(`Xin chào ${name}.Năm nay ${2022 - year} tuổi`)
}

sayHelloWithNameAndYear("Bui Hien", 1997);

// Function có trả về kết quả
// Tính tổng 2 số bất kỳ
function sum(num1 =10, num2 = 20) {
        let result = num1 + num2;
        return result
}
// Các câu lệnh đằng sau từ khóa "return" sẽ ko đc thực thi
// console.log(num1);
// Thực thi
let data = sum(3, 4);
console.log(data);

console.log(sum(5, 6));

console.log(sum(data, 5));

console.log(sum(3)); // Giá trị 1 là 3, giá trị 2 lấy trên function là 20

console.log(sum());

// Bài tập function

// 1. In ra dòng chữ: Xin chào các bạn.

function sayHello1() {
        console.log("Xin chào các bạn")
}

// 2.In ra dòng chữ : Xin chào X (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm).

function sayHelloWithName1(name1) {
        console.log(`Xin chào ${name1}`);
}

sayHelloWithName1("Hung");
sayHelloWithName1("Mai");


// 3.In ra dòng chữ: Xin chào “X” (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm).

function sayHelloWithName2(name2) {
        console.log(`Xin chào "${name2}"`);
}

sayHelloWithName2("Hung Mai");

// 4.Tính tổng 2 số a, b bất kỳ.

function sum(a, b) {
        let result = a + b;
        return result
}

console.log(sum(3, 4));

// 5. Tính bình phương 1 số bất kỳ.

function sqr(a) {
        let result = a * a;
        return result
}

console.log(sqr(4));

// 6. Tính thế kỷ của 1 năm bất kỳ (năm là 1 số nguyên dương).

function round(year) {
        let result = Math.ceil(year / 100);
        return result
}

console.log(round(2022));

// Thực hiện công việc vào buổi sáng

function lamCacCongViecVaoBuoiSang() {
        // Thức dậy(10 dòng)
        thucDay()
        // Đánh răng(10 dòng)
        danhRang()
        // Ăn sáng(10 dòng)

        // Đi làm(10 dòng)

        // Nấu bữa trưa(10 dòng)

}

function thucDay() {}
function danhRang() {}

// Phạm vi sử dụng của biến

// Biến global
let number = 10;
let email = "hien@techmaster.vn";

// Function scope

function anSang() {
        let monAn ="Pho";
        console.log(monAn);
}

anSang();

// block scope
{
        let messsage = "Hom nay troi dep"
        console.log(messsage);
}
