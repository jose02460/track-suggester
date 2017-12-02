$(document).ready(function() {
//  $('#track-Form').validator();
    $("form#track-Form").validator().on('submit', function(event) {
      if((question === "Yes" || question === "Yes" || question === "No" || question === "No" || question === "No")){
        $("#track").show();
        $("#ruby").show();
        $("java").hide();
        $("#cc").hide();
      }
      if(question === "Yes" || question === "Yes" || question === "Yes" || question === "Yes" question === "Yes")){
        $("#track").show();
        $("#ruby").hide();
        $("java").show();
        $("#cc").hide();
      }
      if(question === "Yes" || question === "Yes" || question === "Yes" || question === "Yes" question === "No")){
        $("#track").show();
        $("#ruby").hide();
        $("java").hide();
        $("#cc").show();
      }
      event.preventDefault();
    });
  });
});
