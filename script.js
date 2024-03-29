const range1 = document.getElementById("range");
const range2 = document.getElementById("range2");
const range3 = document.getElementById("range3");
const button = document.getElementById("get-color");
const colorBox = document.getElementById("color-box");

const redIndicator = document.getElementsByClassName("red-range-indicator");
const greenIndicator = document.getElementsByClassName("green-range-indicator");
const blueIndicator = document.getElementsByClassName("blue-range-indicator");

window.onload = function () {
  range1.value = 0;
  range2.value = 0;
  range3.value = 0;
  redIndicator[0].textContent = 0;
  greenIndicator[0].textContent = 0;
  blueIndicator[0].textContent = 0;
  var color =
    "rgb(" + range1.value + "," + range2.value + "," + range3.value + ")";
  colorValueField.value = color;
  colorBox.style.backgroundColor = color;
};

colorValueField = document.getElementById("color-value");
colorValueBtn = document.getElementById("color-value-btn");

redIndicator[0].textContent = range1.value;
greenIndicator[0].textContent = range2.value;
blueIndicator[0].textContent = range3.value;

displayRangeInput(redIndicator, range1);
displayRangeInput(greenIndicator, range2);
displayRangeInput(blueIndicator, range3);

function displayRangeInput(indicator, range) {
  range.addEventListener("input", function () {
    indicator[0].textContent = range.value;
    var color =
      "rgb(" + range1.value + "," + range2.value + "," + range3.value + ")";
    colorValueField.value = color;
    colorBox.style.backgroundColor = color;
  });
}

// display color in color box on manual input of rgb value
colorValueField.addEventListener('input', function() {
  colorBox.style.backgroundColor = this.value;
});

// copying rgb value to clipboard
colorValueBtn.addEventListener("click", function () {
  colorValueField.select();
  document.execCommand("copy");
  alert("color value " + colorValueField.value + " copied to clipboard");
});
