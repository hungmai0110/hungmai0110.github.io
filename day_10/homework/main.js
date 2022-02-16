// Bài 1: Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
function checkNumber1(number1) {
        if(number1 % 3 == 0  && number1 % 5 == 0) {
                console.log("FizzBuzz");
        }
}

checkNumber1(15);

// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
function checkNumber2(number2) {
        if(number2 % 3 == 0) {
                console.log("Fizz");
        }
}

checkNumber2(9);
checkNumber2(10);

// Nếu số đó chia hêt cho 5 thì in ra “Buzz”
function checkNumber3(number3) {
        if(number3 % 5 == 0) {
                console.log("Buzz");
        }
}

checkNumber3(15);

// Bài 2: Viết function giải phương trình bậc nhất (ax + b= 0)
function giaiPhuongTrinhBacNhat(a, b) {
        if(a == 0 && b == 0) {
                console.log("Phương trình vô số nghiệm");
        } else if(a !=0 && b !=0) {
                console.log(`Phương trình có nghiệm là x = ${-b/a}`);
        } else if(a == 0 && b !=0) {
                console.log("Phương trình vô nghiệm");
        } else {
                console.log("Phương trình có nghiệm là x = 0");
        }
}

giaiPhuongTrinhBacNhat(3, 4);
giaiPhuongTrinhBacNhat(0, 0);

// Bài 4: Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?
function namNhuan(year) {
        if(year % 4 == 0) {
                console.log("Là năm nhuận");
        } else {
                console.log("Không là năm nhuận");
        }
}

namNhuan(2022);


// Bài 5: Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. 
// Tính chỉ số BMI tương ứng
function BMI(weight, height) {
        return weight/(height*2)
}

console.log(BMI(62, 1.65));

// Bài 6: Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng
function exchange(temprature) {
        return (temprature*1.8+32)
}

console.log(exchange(5));

// Bài 3: Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

function delta(a, b, c) {
        let data = b*b - 4*a*c;
        return data ;
}

function giaiPhuongTrinhBacHai(a, b, c) {
        if(a == 0 && b == 0 && c == 0) {
                console.log("Phương trình vô số nghiệm");    
        } else if(a == 0 && b !=0 && c !=0) {
                console.log(`Phương trình có nghiệm là x = ${-c/b}`);
        } else if(a == 0 && b ==0 && c !=0) {
                console.log("Phương trình vô nghiệm");
        } else if(a == 0 && b !=0 && c ==0) {
                console.log("Phương trình có nghiệm là x = 0");
        } else {
               if(data < 0) {
                       console.log("Phương trình vô nghiệm");
               } else if(data = 0) {
                       console.log(`Phương trình có nghiệm kép x1 = x2 = ${-b/(2*a)}`)
               } else {
                       console.log(`Phương trình có 2 nghiệm phân biệt là 
                       x1 = ${(-b + sqrt(delta))/(2*a)}
                       x2 = ${(-b - sqrt(delta))/(2*a)}`)
               }
        }
}

giaiPhuongTrinhBacHai(1, -2, 1)