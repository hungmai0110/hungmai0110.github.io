## String methods

### Tìm kiếm chuỗi

Có ba hàm thường dùng để tìm kiếm chuỗi con trong Javascript như sau:

- indexOf()
- lastIndexOf()
- search()

**Hàm `indexOf()`**

`indexOf()` sử dụng khi bạn muốn lấy vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi mẹ.

Lưu ý: nếu tìm thấy thì vị trí được tính từ 0, nếu không tìm thấy thì trả về -1;

Cú pháp: `string.indexOf(searchvalue, start)`. Trong đó:

`searchValue`: String con cần tìm kiếm, phân biệt chữ hoa chữ thường.
`start`: Không bắt buộc, mặc định là 0, là ví trí bắt đầu để tìm kiếm.

```javascript
let str = "Hello world";
let n = str.indexOf("world"); // 6

// Không tìm thấy chuỗi con trong chuỗi mẹ, sẽ trả về -1
let m = str.indexOf("next"); // -1

// Phạm vi tìm kiếm được bắt đầu từ trị trí thứ 5 trong string ban đầu
let l = str.indexOf("o", 5); // 7
```

**Hàm `lastIndexOf()`**

Tương tự như `indexOf()`, nhưng trả về vị trí xuất hiện cuối cùng của chuỗi con trong chuỗi mẹ.

Cú pháp: `string.lastIndexOf(searchvalue, length)`. Trong đó:

- `searchValue`: Chuỗi con cần tìm kiếm, phân biệt chữ hoa chữ thường.
- `length`: Không bắt buộc, là giới hạn của chuỗi, mặc định sẽ là độ dài của chuỗi.

```javascript
let string = "hello hi hi hello";
let n = string.lastIndexOf("hello"); // 12

// Không tìm thấy chuỗi con trong chuỗi mẹ, sẽ trả về -1
let m = string.lastIndexOf("bye"); // -1

// Phạm vi tìm kiếm được tính từ đầu chuỗi cho tới vị trí thứ 5
let l = string.lastIndexOf("he", 5); // 0
```

**Hàm `search()`**

search() được sử dụng để tìm vị trí một chuỗi con trong chuỗi mẹ theo biểu thức chính quy.

Nếu trong chuỗi mẹ xuất hiện nhiều lần chuỗi con cần tìm, thì trả về vị trí chuỗi con đầu tiên.

Phương thức này gần giống với `indexOf()`, khác ở chỗ `indexOf()` chỉ chấp nhận input là chuỗi, còn `search()` chấp nhận cả biểu thức chính quy.

Nếu không tìm thấy chuỗi con trong chuỗi mẹ, search() sẽ trả về -1.

Cú pháp: `string.search(searchValue)`.

Trong đó

`searchValue` là chuỗi con cần tìm kiếm, hoặc là chuỗi biểu thức chính quy thể hiện cho chuỗi con cần tìm.

```javascript
let str = "Welcome to Phambinh.net";

// Tìm theo string thông thường.
let n = str.search("Phambinh.net"); // 11

// Tìm theo biểu thức chính quy
let m = str.search(/to/); // 8
```

### Cắt chuỗi

Nếu ban muốn cắt một chuỗi con từ chuỗi cha thì bạn có thể sử dụng ba hàm sau:

- slice(start, end)
- substring(start, end)
- substr(start, length)

**Note**: tất cả các vị trí của chuỗi đều bắt đầu từ 0.

**Hàm `slice()`**

`slice()` được sử dụng khi bạn muốn trích một chuỗi con trong chuỗi mẹ từ vị trí **n** tới vị trí **m**.

- Tham số **n**, **m** cũng có thể là **số âm**, nếu là số âm vị trí sẽ được tính từ cuối chuỗi.
- Điều kiện: **m > n**

Cú pháp: `string.slice(start, end)`. Trong đó:

- `start`: Là vị trí bắt đầu cắt chuỗi con, tương ứng với tham số **n**.
- `end`: Không bắt buộc, là vị trí kết thúc của chuỗi con, tương ứng với tham số **m**. Nếu không truyền, phương thức này sẽ cắt từ vị trí `start` tới cuối chuỗi.

```javascript
let str = "Hello world!";
let res1 = str.slice(0, 5); // Hello
let res2 = str.slice(6); // world!
let res3 = str.slice(-3); // ld!
```

**Hàm `substring()`**

`substring()` được sử dụng khi bạn muốn tách một chuỗi con trong chuỗi mẹ từ vị trí **n** tới vị trí **m**. Tham số **m** là tham số không bắt buộc, nếu bạn không truyền, `substring()` sẽ trích từ vị trí **n** tới cuối chuỗi.

- Nếu tham số **n > m**, thì ý nghĩa của nó sẽ được đổi cho nhau. Tức nó sẽ cắt từ vị trí **m** tới vị trí **n**.
- Hơn nữa **n** và **m** không nhận giá trị âm, nếu bạn truyền giá trị âm thì chuỗi con trả về sẽ giống chuỗi mẹ ban đầu.

Cú pháp: `string.substring(start, end)`. Trong đó:

- `start`: Là vị trí bắt đầu cắt chuỗi con, tương ứng với tham số **n**.
- `end`: Không bắt buộc, là vị trí kết thúc của chuỗi con, tương ứng với tham số **m**. Nếu không truyền, phương thức này sẽ cắt từ vị trí `start` tới cuối chuỗi.

```javascript
let str = "Hello world!";
let res1 = str.substring(1, 3); // el
let res2 = str.substring(3, 1); // el
let res3 = str.substring(3); // lo world!
let res3 = str.substring(-3); // Hello world!
```

**Hàm `substr()`**

`substr()` được sử dụng khi bạn muốn cắt một chuỗi con trong chuỗi mẹ từ vị trí **n** và kéo dài **m** phần tử.

Lưu ý: `substr()` khá dễ nhầm lẫn với `slice()`, chúng khác nhau ở tham số thứ 2:

- `substr()`: Tham số **m** là độ dài của chuỗi con tính từ vị trí **n**.
- `slice()`: Tham số **m** là vị trí kết thúc của chuỗi con tính từ vị trí **n**.

Cú pháp: `string.substr(start, length)`. Trong đó:

- `start`: Vị trí bắt đầu cắt, tương ứng với tham số **n**.
- `length`: Không bắt buộc, độ dài của chuỗi con muốn cắt, tương ứng với tham số **m**. Nếu không truyền thì sẽ cắt từ vị trí `start` cho tới cuối chuỗi mẹ.

```javascript
let str = "Hello world!";
let res1 = str.substr(1, 4); // ello
let res2 = str.substr(6); // world!
let res3 = str.substr(4, 1); // o
let res4 = str.substr(-2, 4); // d!
```

### Tính độ dài chuỗi: `length`

```javascript
let string = "abc";
let n = string.length; // 3
```

### Tìm kiếm và lặp chuỗi

Hàm `replace()` được sử dụng khi bạn muốn tìm kiếm và thay thế một chuỗi con trong chuỗi mẹ. Phương thức này không làm thay đổi chuỗi mẹ, mà trả về một chuỗi mới.

**Lưu ý**:

- Nếu chuỗi con không được thể hiện dưới dạng biểu thức chính quy, thì `replace()` sẽ chỉ thay thế được chuỗi con đầu tiên tìm thấy.
- Nếu bạn muốn tìm và thay thế tất cả, thì có thể sử dụng `/string/g` (xem ví dụ bên dưới).

Cú pháp: `string.replace(searchValue, newValue)`. Trong đó:

- `searchValue`: Là chuỗi con cần tìm kiếm, hoặc là chuỗi biểu thức chính quy. Cái mà sẽ được thay thế bằng `newValue`.
- `newValue`: Là giá trị sẽ được thay thế.

```javascript
let str = "Visit Microsoft";
let res = str.replace("Microsoft", "Apple"); // Visit Apple

// Tìm kiếm tất cả 'you' thay thế thành 'Maria'
let str = "I love you, you are my life";
let res = str.replace(/you/g, "Binh"); // I love Maria, Maria are my life
```

### Chuyển thành chữ hoa và chữ thường

Hàm `toUpperCase()` được sử dụng khi bạn muốn chuyển toàn bộ ký tự trong chuỗi thành dạng CHỮ HOA.

Cú pháp: `string.toUpperCase()`. Phương thức này không có tham số.

```javascript
let str = "Hello World!";
let res = str.toUpperCase(); // HELLO WORLD!
```

Hàm `toLowerCase()` được sử dụng khi bạn muốn chuyển tất cả các ký tự trong chuỗi về dạng chữ thường.

Cú pháp: `string.toLowerCase()`. Phương thức này không có tham số.

```javascript
let str = "Hello World!";
let res = str.toLowerCase(); // hello world!
```

### Nối thêm chuỗi

Hàm `concat()` được sử dụng để nối 2 hoặc nhiều chuỗi lại với nhau. Phương thức này không làm thay đổi chuỗi ban đầu, nhưng sẽ trả về một chuỗi mới.

Cú pháp: `str.concat(string1, string2,... stringN)`.

```javascript
// VD 1
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2); // Hello world!

// VD 2
var last = "Mai ";
var middle = "Ngoc ";
var first = "Hung";
var full = last.concat(middle, first); // Mai Ngoc Hung
```

### Tìm ký tự hoặc mã ASCII của một ký tự

Để xem **ký tự** của một vị trí nào đó thì dùng hàm `charAt()`, còn xem mã **ASCII** thì dùng hàm `charCodeAt()`.

Cả hai hàm này đều có tham số truyền vào là vị trí muốn xem.

```javascript
let str = "HELLO WORLD";

// Xem kí tự
str.charAt(0); // H
str.charAt(1); // E

// Xem mã ASCII
str.charCodeAt(0); // 72
str.charCodeAt(1); // 69
```

### Chuyển đổi chuỗi sang mảng

Hàm `split()` được sử dụng khi bạn muốn phân tách chuỗi mẹ thành một mảng các chuỗi con theo một dấu hiệu nhận biết nào đó.

Nếu dấu hiệu nhận biết là một chuỗi rỗng ”, thì `split()` sẽ tách các ký tự trong chuỗi mẹ thành các phần tử trong mảng kết quả. Phương thức này không làm thay đổi chuỗi mẹ.

Cú pháp: `string.split(separator, limit)`. Trong đó:

- `separator`: Không bắt buộc, là dấu hiệu nhận biết để phân tách chuỗi.
- `limit`: Số lượng phần tử tối đa muốn phân tách.

```javascript
let str1 = "How are you doing today?";
let res1 = str1.split(" "); // ["How", "are", "you", "doing", "today?"]

let str2 = "Hello world";
let res2 = str2.split("", 5); // ["H", "e", "l", "l", "o"]
```

### Kiểm tra xem chuỗi con có nằm trong chuỗi mẹ không

Hàm `includes()` được sử dụng để kiểm tra xem chuỗicon có nằm trong chuỗi mẹ hay không. Phương thức trả về `true` nếu tìm thấy, ngược lại trả về `false`.

Cú pháp: `string.includes(searchValue, start)`. Trong đó:

- `searchValue`: Chuỗi con cần tìm kiếm, phân biệt chữ hoa chữ thường.
- `start`: Không bắt buộc, mặc định là 0, là ví trí bắt đầu để tìm kiếm.

```javascript
let str = "Hello world, welcome to the universe.";
let n = str.includes("world"); // true

// Phạm vi tìm kiếm được bắt đầu từ vị trí thứ 12 trong chuỗi ban đầu
let m = str.includes("world", 12); // false
```

### Lặp đi lặp lại chuỗi

Hàm `repeat()` được sử dụng khi bạn muốn lặp đi lặp lại một chuỗi tương ứng với số lần bạn truyền vào.

Cú pháp: `string.repeat(count)`. Trong đó `count` là số lần mà bạn muốn chuỗi được lặp lại.

```javascript
let str = "Hello world!";
letstr2 = str.repeat(2); // Hello world!Hello world!
```

### Xóa khoảng trắng hai đầu của chuỗi

Cú pháp: `string.trim()`. Phương thức này không có tham số.

```javascript
let str = "       Hello World!        ";
let res = str.trim(); // Hello World!
```

## Array methods

### Gộp nhiều mảng lại với nhau: `concat()`

Cú pháp: `array1.concat(array2, array3, ..., arrayX)`. Trong đó `array2`, `array3`, ..., `arrayX` là các mảng bạn muốn gộp lại với mảng `array1`.

```javascript
let iphonePhones = ["iphone 4", "iphone 5"];
let samsungPhones = ["galaxy s1", "galaxy s2"];
let nokiaPhones = ["n8", "n81", "n82"];

let phones = nokiaPhones.concat(iphonePhones, samsungPhones);

// ["n8", "n81", "n82", "iphone 4", "iphone 5", "galaxy s1", "galaxy s2"]
```

### Tách một đoạn trong mảng và ghi đè vào một đoạn khác trong chính mảng đó: `copyWhithin`

Cú pháp: `array.copyWithin(target, start, end)`. Trong đó:

- `target`: Vị trí bắt đầu ghi đè.
- `start`: Không bắt buộc, là vị trí bắt đầu của mảng muốn trích, mặc định là 0.
- `end`: Không bắt buộc, là vị trí kết thúc của mảng muốn trích, mặc định là độ dài của mảng.

**Lưu ý**: `copyWithin()` sẽ không bao giờ làm thay đổi số lượng phần tử có trong mảng.

```javascript
// Copy toàn bộ mảng và ghi đè từ vị trí thứ 2
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2);
console.log(fruits); // ["Banana", "Orange", "Banana", "Orange"]

// Copy các phần tử từ vị trí 2 tới vị trí 4 sau đó ghi đè từ vị trí 0
let samsungPhones = [
  "galaxy s1",
  "galaxy s2",
  "galaxy s3",
  "galaxy s4",
  "galaxy s5",
];
samsungPhones.copyWithin(0, 2, 4);
console.log(samsungPhones); // ["galaxy s3", "galaxy s4", "galaxy s3", "galaxy s4", "galaxy s5"]
```

### Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện không: `every`

Phương thức trả về `true` khi tất cả các phần tử đều thỏa mãn, trả về `false` khi một trong số các phần tử không thỏa mãn.

Điều kiện bạn đặt ra được thể hiện dưới dạng một callback.

Cú pháp: `array.every(function(currentValue, index, arr), thisValue)`. Trong đó:

- `function(currentValue, index, arr)`: function callback chạy cho mỗi phần tử mảng.
- `currentValue`: Giá trị của phần tử hiện tại
- `index`: Không bắt buộc, là vị trí của phần tử hiện tại
- `arr`: Không bắt buộc, là mảng mà chứa phần tử hiện tại
- `thisValue`: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị `this` của function, nếu không truyền this sẽ là `undefined`.

```javascript
// Kiểm tra mảng numbers có phải toàn số lẻ hay không?
let numbers = [1, 2, 3, 4, 5];
let isOddArray = numbers.every(function (item) {
  return item % 2 != 0;
});
console.log(isOddArray); // false

// Kiểm tra numbers có phải mảng giảm dần hay không?
let numbers = [5, 4, 3, 2, 1];
let isDescArray = numbers.every(function (item, index, arr) {
  if (index == 0) {
    return true;
  } else {
    return item < arr[index - 1];
  }
});

console.log(isDescArray); // true
```

### Làm cho tất cả các phần tử trong mảng trở thành một giá trị giống nhau: `fill`

Cú pháp: `array.fill(value, start, end)`. Trong đó:

- `value`: Bắt buộc, là giá trị mà bạn muốn điền vào mảng
- `start`: Không bắt buộc, là vị trí bắt đầu của việc điền vào mảng, mặc định là 0.
- `end`: Không bắt buộc, là vị trí kết thúc của việc điền vào mảng, mặc định sẽ là `array.length`

```javascript
// Điền 2 phần tử cuối cùng thành "Kiwi"
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4); // ["Banana", "Orange", "Kiwi", "Kiwi"]
```

### Tìm phần tử mảng đầu tiên thỏa mãn điều kiện bạn đặt ra: `find()`

Cú pháp: `array.find(function(currentValue, index, arr), thisValue)`.

```javascript
// Tìm user có id là 2
let users = [
  { id: 1, name: "Binh" },
  { id: 2, name: "Trang" },
  { id: 3, name: "Minh" },
];

let myId = 2;
let myInfo = users.find(function (user) {
  return user.id == myId;
});

console.log(myInfo); // {id: 2, name: "Trang"}

// Tìm phần tử đầu tiên trong mảng có giá trị lớn hơn 2
let numbers = [1, 2, 3, 4, 5];
let n = numbers.find(function (item) {
  return item > 2;
});
console.log(n); // 3
```

### Tìm vị trí của phần tử mảng đầu tiên thỏa mãn điều kiện bạn đặt ra: `findIndex()`

```javascript
// Tìm vị trí của phần tử đầu tiên trong mảng có giá trị lớn hơn 2
let numbers = [1, 2, 3, 4, 5];
let n = numbers.findIndex(function (item) {
    return item > 2;
});
console.log(n); // 2
```

### Kiểm tra một phần tử có xuất hiện trong mảng hay không: `includes()`

Trả về `true` nếu phần tử mảng có xuất hiện, trả về `false` nếu phần tử mảng không xuất hiện.

Cú pháp: `array.includes(element, start)`. Trong đó

- `element`: Bắt buộc, là giá trị của phần tử muốn kiểm tra.
- `start`: Không bắt buộc, là vị trí bắt đầu tìm kiếm trong mảng, mặc định là 0.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let n = fruits.includes("Mango"); // true
```

###  Tìm vị trí (đầu tiên) của một phần tử trong mảng: `indexOf()`

Phương thức sẽ trả về -1 nếu không tìm thấy.

Cú pháp: `array.indexOf(item, start)`. Trong đó:

- `item`: Bắt buộc, giá trị của phần tử muốn tìm kiếm vị trí.
- `start`: Không bắt buộc, là vị trí bắt đầu tìm kiếm, mặc định là 0.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.indexOf("Apple"); // 2
```

### Nối các phần tử của mảng thành một string: `join()`

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let energy = fruits.join(); // "Banana,Orange,Apple,Mango"
```

### Tính số lượng phần tử có trong mảng: `length`

Có thể thay đổi số lượng phần tử trong mảng bằng cách gán giá trị mới cho thuộc tính này.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4
 
fruits.length = 1;
console.log(fruits); // ["Banana"]
```

### Tìm kiếm vị trí cuối cùng của một phần tử trong mảng: `lastIndexOf()`

Phương thức trả về -1 nếu không tìm thấy.

Cú pháp:`array.lastIndexOf(item, start)`. Trong đó:

- `item`: Bắt buộc, giá trị của phần tử muốn tìm kiếm vị trí.
- `start`: Không bắt buộc, là vị trí bắt đầu tìm kiếm, mặc định là 0.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let  n = fruits.lastIndexOf("Apple");
console.log(n); // 2
```

### Thay đổi giá trị của các phần tử trong mảng theo một logic nào đó: `map()`

```javascript
let numbers = [2, 4, 6, 8];
 
let doubleNumbers = numbers.map(function(num) {
  return num * 2;
});
 
console.log(doubleNumbers); //  [4, 8, 12, 16]
```

### Tính tổng các phần tử từ phải qua trái: `reduce`

```javascript
// Tính tổng các phần tử trong mảng numbers
var numbers = [1, 2, 3, 4, 5, 6];
 
var sum = numbers.reduce(function (total, number) {
    return total + number;
}, 0);
 
console.log(sum); // 21
```

### Đảo ngược thứ tự các phần tử trong mảng: `reverse()`

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits); // ["Mango", "Apple", "Orange", "Banana"]
```

### Tách một mảng con từ vị trí n tới vị trí m trong mảng ban đầu: `slice()`

**Lưu ý** mảng được trích sẽ không bao gồm phần tử thứ m.

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 
// Mảng citrus được trích từ mảng fruits, trích từ phần tử index 1, tới phần tử index 3
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Lemon"]
 
// Trích từ cuối mảng lên
let myBest = fruits.slice(-3, -1);
console.log(myBest); // ["Lemon", "Apple"]
```

### Kiểm tra một mảng có thỏa mãn điều kiện hay không: `some()`

Kết quả trả về `true` hoặc `false`

```javascript
// Kiểm tra mảng numbers có số nào là số lẻ hay không?
let numbers = [1, 2, 3, 4, 5];
let hasOddNumber = numbers.some(function (item) {
    return item % 2 != 0;
});
console.log(hasOddNumber); // true
```

### Sắp xếp các phần tử trong mảng theo chiều tăng dần hoặc giảm dần: `sort()`

Cú pháp: `array.sort(function (a, b))`. Trong đó 

`function (a, b)` (không bắt buộc) là callback để bạn tùy chỉnh thứ tự sắp xếp các phần tử trong mảng. Tham số `a`, `b` là một cặp phần tử trong mảng. 

- Callback trả về >= 0 thì a và b sẽ không đổi chỗ 
- trả về < 0 thì a và b sẽ đổi chỗ cho nhau.

```javascript
// Sắp xếp phần tử mảng theo thứ tự bảng chữ cái
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
 
// Sắp xếp mảng tăng dần
let numbers = [5, 3, 6, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3, 5, 6]
 
// Sắp xếp mảng giảm dần
let numbers = [5, 3, 6, 1, 2];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers); // [6, 5, 3, 2, 1]
```

### Thay thế một số phần tử trong mảng bằng một số phần tử khác: `splice()`

```javascript
// Thay thế 1 phần tử tính từ index 2 bằng các phần tử "Lemon", "Kiwi"
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"];
 
// Do các tham số item1,... itemX là không bắt buộc
// Nên chúng ta có thể sử dụng phương thức này để xóa hàng loạt các phần tử trong mảng, xet ví dụ dưới đây
// Xóa 2 phần tử mảng kể từ index 2
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2);
console.log(fruits); // ["Banana", "Orange"]
```

### Chuyển mảng thành chuỗi: `toString`

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.toString();
console.log(x); // "Banana,Orange,Apple,Mango"
```