angular.module("mainApp").service("productService", function($http) {
  this.getAllProducts = function() {
    return $http.get("/products")
  }
})
