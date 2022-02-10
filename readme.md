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

```html
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

### 1. Kiểu dữ liệu `undefined`

Dùng để biểu thị trạng thái biến **chưa gán giá trị**.

### 2. Kiểu dữ liệu `boolean`

Dùng để biểu thị hai giá trị `true` và `false` nghĩa là **đúng** và **sai**.

### 3. Kiểu dữ liệu `null`

Dùng để biểu thị trạng thái **không biết giá trị**.

