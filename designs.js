// variables to call from index.html
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const picker = document.getElementById('colorPicker');
const gridCanvas = document.getElementById('pixelCanvas');
const submit = document.getElementById('sizePicker');


// grid before any value is submitted
makeGrid(height.value, width.value);


// custom grid submitted by user
submit.addEventListener('submit', function(event) {
  event.preventDefault();
  // reset grid every time 'submit' is clicked/submitted
  gridCanvas.firstElementChild.remove();
  makeGrid(height.value, width.value);
});


// makeGrid function - width(row) & height(cell)
function makeGrid(height, width) {
  for (var r = 0; r < height; r++) {
    let row = gridCanvas.insertRow(r);
    for (var c = 0; c < width; c++) {
      let cell = row.insertCell(c);
      // add color to cell
      cell.addEventListener('click', function(event) {
        cell.style.backgroundColor = picker.value;
      })
    }
  }
}
