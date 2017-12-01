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
        $("#c#").show();
      }
      if(question === "Sushi" || question === "Pizza" || question === "Noodles")){
        //$(".animalName-title").text(animal);
        $("#actors").show();
        $("#c#").hide();
        $("#ruby").show();
      }
      event.preventDefault();
  });
});
