//Check off specific to dos by clicking on text
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Check off to do by clicking checkbox
$("input[type='checkbox']").click(function(event) {
  $(this).toggleClass("completed");
});

//Delete a to do
$("ul").on("click", ".delete", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

//Add a to do
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grabs new text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span class='delete'><i class = 'fa fa-trash'></i></span> " +
        todoText +
        "<span class='check'><input type='checkbox'/></span></li>"
    );
  }
});

//Hide or display input field
$(".fa-pencil-alt").click(function() {
  $("input[type='text']").fadeToggle();
});
