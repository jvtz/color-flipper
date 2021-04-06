const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexInput = document.getElementById("hex-color");

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function colorSubmitted() {
  document.body.style.backgroundColor = hexInput.value;
}

function randomColor() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  hexInput.value = hexColor;
}
