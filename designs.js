jQuery(document).ready(function() {


//Declare variables
//Check if variables are necessary or if we can just use jQuery
const $sizePicker = $('.sizePicker');
const $pixelCanvas = $('.pixelCanvas');
const $submitButton = $('.submit');
const $colorPicker = $('#colorPicker');



// When size is submitted by the user, call makeGrid()
$('.submit').click(function() {
  let height = $('.gridHeight').val();
  let width= $('.gridWidth').val();

  makeGrid(width, height);
});


//Create the Grid function
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

// Select color input
