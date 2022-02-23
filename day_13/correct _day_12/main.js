/*
Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
Ví dụ:
    - checkStringExist(“i love you”, “you”) => true
    - checkStringExist(“i love you”, “hate”) => false
*/
function checkStringExist(begin, check) {
    // if (begin.includes(check)) {
    //     return true
    // }
    // else {
    //     return false
    // }

    return begin.includes(check)
}
console.log(checkStringExist("i love you", "hate"))

function checkStringExist_02(str, subStr) {
    // if (str.indexOf(subStr) == -1){
    //     return false;
    // } else {
    //     return true;
    // }
    return str.indexOf(subStr) == -1 ? false : true
}
console.log(checkStringExist_02("i love you", "you"));

/*
Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

Ví dụ:
    - shortenString(“Xin chào các bạn”) => “Xin chào…”
    - shortenString("hello’) => “hello”
*/
function shortenString(str) {
    if (str.length <= 8) {
        return str;
    } else {
        // return str.substr(0, 8) + "...";
        return str.slice(0, 8) + "..."
    }
}
console.log(shortenString("Xin chao cac ban"));

/*
Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

Ví dụ
    - checkSymmetricString("Race car") => true,
    - checkSymmetricString("hello world") => false.
*/
function checkSymmetricString(str) {
    let string = str;
    // Remove khoảng trắng
    // C1: sử dụng replace + biểu thức chính quy
    // string = string.replace(/ /g, "");

    // C2: sử dụng replaceAll
    // string = string.replaceAll(" ", "");

    // C3: kết hợp nhiều phương thức
    // split : Chuyển từ chuỗi thành mảng
    // join : Chuyển từ mảng -> chuỗi
    string = string.split(" ").join("")


    // In thường chữ
    string = string.toLowerCase();

    // Tìm chuỗi đảo ngược
    // let reverse_string = ""
    // for (let i = string.length - 1; i >= 0; i--) {
    //     reverse_string += string[i];
    // }

    let reverse_string = string.split(" ").reverse().join("")

    // So sánh chuỗi sau khi remove khoảng trắng và in thường với chuỗi đảo ngược của nó
    // if (string == reverse_string) {
    //     return true;
    // } else {
    //     return false;
    // }

    return string == reverse_string
}
console.log(checkSymmetricString("Race car"));

function checkSymmetricString_02(str) {
    let string = str.split(" ").join("").toLowerCase();
    let reverse_string = string.split(" ").reverse().join("")
    return string == reverse_string
}
console.log(checkSymmetricString_02("Race car"));

/*
Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

Ví dụ
    - sortNumber(53751) -> 13557
    - sortNumber(14350) -> 10345
    - sortNumber(203950) -> 200359
*/

// Trả về index (chỉ số) của phần tử có giá trị nhỏ nhất trong chuỗi
function findMinNumber(str){
    let tmp = str[0];
    let pos = 0;
    for (let i = 1; i < str.length; i++){
        if(tmp > str[i]){
            tmp = str[i];
            pos = i;
        }
    }
    return pos;
}

function sortNumber(num) { 
    let tmp = num + "";
    let res = "";
    let a = tmp.length;
    let tmpnum = 0;

    // Sắp xếp lại số theo thứ tự tăng dần
    for(let i = 0; i < a; i++){
        tmpnum = findMinNumber(tmp);
        res += tmp[tmpnum];
        tmp = tmp.substring(0,tmpnum) + tmp.substring(tmpnum + 1);
    }

    // Sắp xếp lại số 0
    for(let i = 0; i < res.length; i++){
        if(res[i] != "0"){
            res = res[i] + res.slice(0,i) + res.slice(i+1);
            break;
        }
    }
    return res;
}
console.log(sortNumber(235930)); 

function sortNumber_01(number) {
    // b1: Chuyển từ number -> string
    let string = number.toString()

    // b2: Chuyển từ chuỗi -> mảng
    let arr = string.split("")

    // b3: Sắp xếp mảng theo thứ tự tăng dần
    let arrSort = arr.sort();
    
    // b4 : Chuyển từ mảng -> chuỗi
    let stringConvert = arrSort.join("")
    
    // B5: Sắp xếp lại
    let res = ""
    // Tìm ký tự đầu tiên khác 0. Tiến hành cắt và đưa lên trên đầu
    for(let i = 0; i < stringConvert.length; i++){
        if(stringConvert[i] != "0"){
            res = stringConvert[i] + stringConvert.slice(0,i) + stringConvert.slice(i+1);
            break;
        }
        console.log(res)
    }
    return Number(res); // convert chuỗi thành số
}

console.log(sortNumber_01(235930)); 

function sortNumber_02(number) {
    // b1: Chuyển từ number -> string
    let string = number.toString()

    // b2: Chuyển từ chuỗi -> mảng
    let arr = string.split("")

    // b3: Sắp xếp mảng theo thứ tự tăng dần
    let arrSort = arr.sort();
    console.log(arrSort);

    for (let i = 0; i < arrSort.length; i++) {
        if(arrSort[i] != "0") {
            // C1: Sử dụng giá trị trung gian để đổi vị trí
            // let temp = arrSort[i];
            // arrSort[i] = arrSort[0]
            // arrSort[0] = temp

            // C2: Sử dụng Destructuring ES6
            [arrSort[i], arrSort[0]] = [arrSort[0], arrSort[i]]
            break
        }
    }
    let stringConvert = arrSort.join("")
    return Number(stringConvert)
}
console.log(sortNumber_02(2305930)); 

/*
Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

Ví dụ:
    - convertToSnakeCase("HELLO world") => “hello_world”
    - convertToSnakeCase("Xin Chào Các BẠN") => “xin_chào_các_bạn”
*/
function convertToSnakeCase(str) {
    return str.toLowerCase().replaceAll(" ", "_")
}
console.log(convertToSnakeCase("HELLO world"));
console.log(convertToSnakeCase("Xin Chào Các BẠN"));