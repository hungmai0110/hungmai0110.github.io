// B1: Tạo users
const users = [
  {
    username: "abc",
    password: "123",
  },
  {
    username: "mai",
    password: "456",
  },
  {
    username: "ngọc",
    password: "789",
  },
];

// B2: Tạo function
const login = document.getElementById("btn-login");
const loginInfor = () => {
  // Lấy giá trị input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kiểm tra xem có trường nào được để trống hay không
  if (username == "" && password == "") {
    alert("Vui lòng nhập thông tin!");
  } else if (username == "" || password == "") {
    if (username == "") {
      alert("Vui lòng nhập tên!");
    } else if (password == "") {
      alert("Vui lòng nhập mật khẩu!");
    }
  } else {
    // Kiểm tra thông tin có trùng với users hay không
    for (let i = 0; i < users.length; i++) {
      // Nếu có thông báo “Đăng nhập thành công”
      if (username == users[i].username && password == users[i].password) {
        return alert("Đăng nhập thành công");
      }

      // Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”
      else if (username != users[i].username || password != users[i].password) {
        return alert("Tài khoản hoặc mật khẩu không chính xác");
      }
    }
  }
};

// B3: Lắng nghe sự kiện
login.addEventListener("click", loginInfor);
