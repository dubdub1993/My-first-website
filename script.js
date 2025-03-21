
function changeBackgroundColor() {
  const colors = ["#f2d7ee", "#d5f4e6", "#c4f0c5", "#f7cac9", "#f9f9f9", "#b5ead7", "#ffdac1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
