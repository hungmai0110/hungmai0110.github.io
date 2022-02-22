// Hình 1

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

draw1(4, 5);

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

draw2(4, 5);
