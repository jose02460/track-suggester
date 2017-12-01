$(document).ready(function() {
//  $('#actor-Form').validator();
    $("form#track-Form").validator().on('submit', function(event) {
      var age = parseInt($("#inputAge").val());
      var food = $("#question").val();
      var sex = $("input:radio[name=sex]:checked").val();
      if((question === "Sushi" || question === "Pizza" || question === "Noodles")){
        //$(".animalName-title").text(animal);
        $("#actors").show();
        $("#ruby").hide();
        $("#cc").show();
      }
      if(question === "yes" || question === "yes" || question === "yes" || question === "yes" question === "yes")){
        //$(".animalName-title").text(animal);
        $("#actors").show();
        $("#cc").hide();
        $("#ruby").show();
      }
      event.preventDefault();
  });
});
