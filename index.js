//The makeGrid() function
function makeGrid() {
		//global variables
    const gridHeight = $('#input_height').val();
    const gridWidth = $('#input_width').val();
    const table = $('#pixel_canvas');
	
    //makesure that the table grid is empty with no children
    table.children().remove();
        for (let i = 0; i < gridHeight; i++) {
        table.append('<tr></tr>');
        for (let j = 0; j < gridWidth; j++) {
          //add td
            table.children().last().append('<td></td>');
        }
    }
}
// When td is clicked by the user, change color of td
function colorInput() {
    $('td').on('click', function () {
    const color = $('#colorPicker').val();
    $(this).css('backgroundColor', color);
    });
  
    //remove color from a cell/td
    $('td').on('dblclick', function () {
    $(this).css('backgroundColor', '');
    });
}
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").click(function(event) {
    event.preventDefault();//prevent page refresh after hitting submit
    makeGrid();
    colorInput();
  });