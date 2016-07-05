angular.module("mainApp").directive("navbarDirective", function() {
  return {
    templateUrl: "./views/navbar.html",
    link:
      function(scope, elements, attributes) { $(document).ready(function() {


      $(".button-div").hover(
        function() { $(this).addClass("hover-class")},
        function() { $(this).removeClass("hover-class")}
    )
  })
    }
  }
})
