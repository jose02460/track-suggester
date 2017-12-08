$(document).ready(function() {
    $("form#track-Form").submit(function(event) {
      event.preventDefault();
      var question1 = $("#question1").val();
      var question2 = $("#question2").val();
      var question3 = $("#question3").val();
      var question4 = $("#question4").val();
      var question5 = $("#question5").val();

      if(question1 === "Yes" || question2 === "Yes" || question3 === "No" || question4 === "No" || question5 === "No") {
        $("#track").show();
        $("#ruby").show();
        $("#java").hide();
        $("#cc").hide();
      };
      if(question1 === "Yes" || question2 === "Yes" || question3 === "Yes" || question4 === "Yes" || question5 === "Yes") {
        $("#track").show();
        $("#ruby").hide();
        $("#java").show();
        $("#cc").hide();
      };
      if(question1 === "Yes" || question2 === "Yes" || question3 === "Yes" || question4 === "Yes" || question5 === "No") {
        $("#track").show();
        $("#ruby").hide();
        $("#java").hide();
        $("#cc").show();
      };
    });
  });
