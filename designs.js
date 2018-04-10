// Global variables
let draw = true;

// Submit button
$("input[type='submit']").on("click", function(event) {
  event.preventDefault();

  const height = $("#inputHeight").val();
  const width = $("#inputWidth").val();

  $("#pixelCanvas").empty();

  makeGrid(height, width);
});

// Toggle between Draw/Erase
$("input[name='tool']").on("change", function() {

  console.log("Before conditional draw value=", draw);

  if ($(this).val() === "draw") {
    draw = true; // change global var
  }
  else if ($(this).val() === "erase") {
    draw = false; // change global var
  }
  // Get value of "changed" input
  console.log("After conditional draw value=", draw);
  console.log($(this).val());
});

// Clear Grid button
$("#clearGrid").on("click", function(event) {
  event.preventDefault();
  $("#td").remove();
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    //console.log(height, width);
    // For number up to height
    for (let rows = 0; rows < height; rows++) {
      // Create a row
      $("#pixelCanvas").append($("<tr></tr>"));
      // For number up to width
      for (let columns = 0; columns < width; columns++) {
        // Add a td to a row
        $("tr").last().append($("<td></td>"));
      }
    }

    // Color square when clicked
    $("#pixelCanvas").on("mousedown mouseover", "td", function(e) {
      //console.log(e.buttons);
      if (e.buttons === 1) {

        if (draw === true) { // global var checked
          $(this).css("background-color", $("#colorPicker").val());
        }
        else {
          $(this).css("background-color", "");
        }
      }
    });
}
