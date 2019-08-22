$(function() {
    var theGrid = $("#pixel_canvas");
    var currentColor = "#000";
    $("#sizePicker").submit(function(e) {
      e.preventDefault();
      makeGrid();
    });
    $("#colorPicker").change(function() {
      currentColor = $(this).val();
    });
    theGrid.on("mousemove", "td", function(e) {
      if (e.buttons == 1) {
        $(this).css("background-color", currentColor); 
      }
    });
    theGrid.on("click", "td", function(e) {
      $(this).css("background-color", currentColor); 
    });
    function makeGrid() {
      var gridHeight = $("#input_height").val();
      var gridWidth = $("#input_width").val();
      theGrid.empty(); 
      for (x = 0; x <= gridHeight - 1; x++) {
        theGrid.append("<tr>"); 
        for (y = 0; y <= gridWidth - 1; y++) {
          $("tr:eq(" + x + ")").append("<td></td>");
        }
        theGrid.append("</tr>"); 
      }
    }
  });