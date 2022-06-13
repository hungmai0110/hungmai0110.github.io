const users = [
  {
    username: "bob",
    password: "123",
  },
  {
    username: "alice",
    password: "456",
  },
];

const button = document.getElementById("btn-login");

button.addEventListener("click", function () {
  // Lấy giá trị input
  const usernameEl = document.getElementById("username").value;
  const passwordEl = document.getElementById("password").value;

  // 1. Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
  if (!usernameEl || !passwordEl) {
    if (!usernameEl && !passwordEl) {
      alert("Vui lòng điền thông tin");
    } else if (!usernameEl) {
      alert("Vui lòng điền tên");
    } else if (!passwordEl) {
      alert("Vui lòng điền mật khẩu");
    }
  } else {
    // 2. Nếu điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không?
    const isLogin = users.some(function (user) {
      return usernameEl == user.username && passwordEl == user.password;
    });

    // Nếu isLogin == true => có thông báo “Đăng nhập thành công"
    // Nếu isLogin == false => thông báo “Tài khoản hoặc mật khẩu không chính xác”

    isLogin == true
      ? alert("Đăng nhập thành công")
      : alert("Tài khoản hoặc mật khẩu không chính xác");
  }
});
