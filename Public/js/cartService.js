angular.module("mainApp").service("cartService", function($http){
  this.addToCart = function(id) {
    return $http.post("/cartproducts", {id: id})
  }
  this.removeFromCart = function(id) {
    return $http.put("/api/removeproduct", {id: id})
  }
  this.getCart = function() {
    return $http.get("/api/cart")
  }
})
