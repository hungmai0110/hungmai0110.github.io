// Hình 1
// row: hàng, col: cột

function draw1(row, col) {
  let content = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      content += "* ";
    }
    content += `<br/>`;
  }
  document.write(`<pre>${content}</pre>`);
}

draw1(3, 4);

// Hình 2

function draw2(row, col) {
  let content = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (i == 1 || i == row || j == 1 || j == col) {
        content += "* ";
      } else {
        content += "  ";
      }
    }
    content += `<br/>`;
  }
  document.write(`<pre>${content}</pre>`);
}

draw2(3, 4);

// Hình 3

function draw3(side) {
  let content = "";
  for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= side; j++) {
      if (i == j || i + j - 1 == side) {
        content += "* ";
      } else {
        content += "  ";
      }
    }
    content += `<br/>`;
  }
  document.write(`<pre>${content}</pre>`);
}

draw3(5);

// Hình 4

function draw4(row, col) {
  let content = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (i >= j) {
        content += "* ";
      } else {
        content += "  ";
      }
    }
    content += `<br/>`;
  }
  document.write(`<pre>${content}</pre>`);
}

draw4(5, 5);
