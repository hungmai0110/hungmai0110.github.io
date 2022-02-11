## 1. Cách viết chương trình Javascript

### - Cách 1: Viết trực tiếp mã Javascript trong file HTML

-  Tạo file **index.html**
-  Viết mã Javascript in ra dòng chữ **“Hello world”** trên màn hình console của trình
duyệt.

```HTML
<body>
    
    <!-- Viết mã Javascript trong cặp thẻ script -->
    <script>
        console.log("Hello world");
    </script>
</body>
```
### - Cách 2: Tạo file có đuôi là .js để viết mã Javascript ( ***nên sử dụng*** )

- Tạo file **main.js** để viết mã Javascript ( **main.js** nằm cùng cấp với **index.html** )

```javascript
// file main.js
console.log("Hello world");
```

- Nhúng file **main.js** vào file **index.html** thông qua thuộc tính src trong thẻ script

```html
<body>
    
    <!-- Link sang 1 file javascript -->
    <script src="./main.js"></script>
</body>
```

## 2. Khai báo biến

Sử dụng từ khóa `let`, `const` để khai báo biến

### Sử dụng let

```javascript
// Khai báo biến và không gán giá trị cho biến
let age;
age = 35;

// Khai báo biến và gán giá trị cho biến
let age = 35;
```
### Sử dụng const

Được sử dụng để khai báo hằng số

```javascript
// Không thể gán lại giá trị cho 1 biến const
const number = 100;
```

### Quy tắc đặt tên biến

-  Chứa các ký tự **chữ**, **số**, **_** và **$**
-  Ký tự đầu tiên không được là số (nên là chữ)
-  Có phân biệt hoa thường
-  Không trùng với các từ khóa của Javascript như: **for**, **while**, **this**, …
-  Nên đặt tên theo kiểu **camelCase** nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví
dụ binhphuong thì nên đặt là binhPhuong.

### Kiểm tra kiểu dữ liệu của biến

Để kiểm tra kiểu dữ kiệu của 1 biến, chúng ta sử dụng toán tử **typeof**

```javascript
let number = 10;
console.log(typeof number); // "number"

let name = "Bùi Hiên";
console.log(typeof name); // "string"
```
## 3. Một số kiểu dữ liệu trong Javascript

- ### Kiểu dữ liệu `undefined`

  Dùng để biểu thị trạng thái biến **chưa gán giá trị**.

- ### Kiểu dữ liệu `boolean`

  Dùng để biểu thị hai giá trị `true` và `false` nghĩa là **đúng** và **sai**.

- ### Kiểu dữ liệu `null`

  Dùng để biểu thị trạng thái **không biết giá trị**.

- ### Kiểu dữ liệu `number`

  Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.

  ```javascript
  let age = 25;
  let num = 5.1;
  ```

- ### Kiểu dữ liệu `string`

  String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.

  Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ’ hoặc nháy kép ".

  Ví dụ:

  ```javascript
  let name = “Nguyễn Văn A”;
  let email = “abc@gmail.com”;
  ```

  #### Một số lưu ý

  Trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.

  ```javascript
  let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";
  <!-- Xin chào các bạn, mình tên là "Bùi Hiên". Mình sinh năm 1997 -->
  ```

  Khi bạn muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu `\n` để nối chuỗi.
  (**ít dùng**)

  ```javascript
  let message_5 = "Hi\nIam Hưng" ;
  console.log(message_5);
  <!-- Hi
  Iam Hưng -->
  ```



## 4. Template strings -ES6



## 5. Math object trong Javasript

### Một số phương thức hay được sử dụng

- **Math.PI**: Lấy ra giá trị của số PI
- **Math.round(number)**: Làm tròn số bình thường
- **Math.ceil(number)**: Làm tròn số lên
- **Math.floor(number)**: Làm tròn số xuống
- **Math.random()**: Random 1 số ngẫu nhiên trong khoảng 0 -> 1
- **Math.min(number1, number 2, … number n)**: Lấy ra giá trị nhỏ nhất trong danh sách số
- **Math.max(number1, number 2, … number n)**: Lấy ra giá trị lớn nhất trong danh sách số
- **Math.pow(a, b)**: Số mũ (a^b)
- **Math.sqrt(number)**: Căn bậc 2

### Ví dụ:

```javascript
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

```

aa