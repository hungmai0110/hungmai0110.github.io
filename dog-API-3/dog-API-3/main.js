// Truy cập
const selectEl = document.getElementById("list");
const getSubBreed = document.querySelector(".btn-random");
const ulSubList = document.querySelector(".sublist");
const imageEl = document.querySelector(".image");

// Hiển thị ảnh gioowngs loài phụ
const getSubBreedImage = async (name) => {
  // Lấy ra nội dung trong ô select
  const selectValue = selectEl.value;

  try {
    // Lấy API ảnh
    let res = await axios.get(
      `https://dog.ceo/api/breed/${selectValue}/${name}/images/random`
    );

    imageEl.src = res.data.message;
  } catch (error) {
    console.log(error);
  }
};

// 1. Lấy ra danh sách giống loài chính và hiển thị
const getBreedList = async () => {
  try {
    // Gọi API lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    let list = res.data.message;

    // Hiển thị danh sách
    let html = "";

    Object.keys(list).forEach((name) => {
      html += `<option>${name}</option>`;
    });

    selectEl.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};

// 2. Hiển thị giống loài phụ
getSubBreed.addEventListener("click", async () => {
  // Lấy ra nội dung trong ô select
  const selectValue = selectEl.value;

  try {
    // Gọi API lấy danh sách giống loài
    let res = await axios.get(`https://dog.ceo/api/breed/${selectValue}/list`);
    let subList = res.data.message;

    // Hiển thị danh sách Sub Breeds List
    // Nếu giống loài đó không có Sub Breed thì hiển thị "Không có sub breed"
    // Nếu có thì hiển thị tên các loài sub breed

    if (subList.length == 0) {
      ulSubList.innerHTML = "<li>Không có sub breed</li>";
    } else {
      // Hiển thị danh sách ô select
      let html = "";

      subList.forEach((name) => {
        html += `<li onclick="(getSubBreedImage(${name}))"><a href="#">${name}</a></li>`;
      });

      ulSubList.innerHTML = html;
    }
  } catch (error) {
    console.log(error);
  }
});

// Hiển thị danh sách giống loài chính
getBreedList();
