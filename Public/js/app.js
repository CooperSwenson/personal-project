angular.module("mainApp", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
    .state("home", {
      templateUrl: "./views/home-tmpl.html",
      url: "/",
    })
    .state("headwear", {
      url: "/headwear",
      templateUrl: "./views/headwear-tmpl.html",
      controller: "productCtrl"
    })
    .state("shirts", {
      url: "/shirts",
      templateUrl: "./views/shirts-tmpl.html",
      controller: "productCtrl"
    })
    .state("cart", {
      url: "/cart",
      templateUrl: "./views/cart-tmpl.html"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "./views/contact-tmpl.html"
    })
    .state("admin", {
      url: "/admin959862fornow",
      templateUrl: "./views/admin-tmpl.html"
    })
})
