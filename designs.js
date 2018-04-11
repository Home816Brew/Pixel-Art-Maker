jQuery(document).ready(function() {

//Declare variables

const $sizePicker = $('.sizePicker');
const $pixelCanvas = $('.pixelCanvas');
const $submitButton = $('.submit');
const $resetButton = $('.reset');


// - User Interaction - When Submit button is clicked, call makeGrid()
$submitButton.click(function() {
  let height = $('.gridHeight').val();
  let width= $('.gridWidth').val();
  clearGrid();
  makeGrid(width, height);
});

// - User Interaction - When Reset Button is clicked, call clearGrid()
$resetButton.click(function() {
  clearGrid();
});


// - User Interaction - When Color Picker is clicked,
$pixelCanvas.on('click', 'td', function() {
  $(this).css('background-color', $('.colorPicker').val());
});


//Function Declarations - Clear Grid -
function clearGrid() {
  $('tr').remove();
};

//Function Declarations - Create Grid -
  function makeGrid(height, width) {
    const $tableBody = $('<table></table>');
    let $tableRow;
    let $tableColumn;

    for (let row = 0; row < height; row++) {
      $tableRow = $('<tr></tr>');

      for (let column = 0; column < width; column++) {
        $tableColumn = $('<td></td>');
        $tableRow.append($tableColumn);
      }
      $tableBody.append($tableRow);
    }
    $pixelCanvas.append($tableBody);
  };
});
