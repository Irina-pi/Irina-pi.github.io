const slider = document.getElementById('range');
const output = document.getElementById('persentDemo');
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = `${this.value} `;
};
