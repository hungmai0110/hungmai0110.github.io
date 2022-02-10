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



