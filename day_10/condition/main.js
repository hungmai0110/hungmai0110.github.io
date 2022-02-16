// Kiểu dữ liệu Boolean

let a = true;
let b = false;
let c = !a;
let d = !b;

console.log(a, b, c, d);

// Sử dụng hàm Boolean để kiểm tra đúng hay sai hay biểu thức

console.log(Boolean(10));
console.log(Boolean("Hung mai"));
console.log(Boolean(3 + 5));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Toán tử và (&&), có 1 cái false thì false cả
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Toán tử hoặc (||), có 1 cái true thì true cả
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Câu lệnh điều kiện

// Câu lệnh if
let hour = 20;
if(hour < 12) {
        console.log("Good morning!")
}

// "==" nghĩa là so sánh
let troiDep = true;
let coTien = true;

if(troiDep == true && coTien == true) {
        console.log("go out");
}

// If-else
if(hour < 12) {
       console.log("Good morning!");
} else {
        console.log("Goood afternoon");
}

// If - else/if - else
if(hour < 12) {
        console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
        console.log("Good afternoon!");
} else {
        console.log("Goood evening!");
}

// Bài tập if/else

// Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. 
// Kiểm tra giá trị của biến mark và in ra nội dụng sau
// ”A” nếu mark >= 85
// ”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
// ”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
// Các trường hợp còn lại in ra “D”

function checkMark(mark) {
        if(mark > 85) {
                console.log("A");
        } else if (70 <= mark && mark < 85) {
                console.log("B");
        } else if (40 <= mark && mark < 70) {
                console.log("C");
        } else {
                console.log("D");
        }
}

checkMark(75);

// Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
function max(a, b) {
        if(a > b) {
                console.log(a);
        } else{
                console.log(b);
        }
}

max(3, 4);

// Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
