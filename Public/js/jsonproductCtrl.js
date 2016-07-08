angular.module("mainApp").controller("productCtrl", ["$scope", "productService", "cartService", function($scope, productService, cartService) {
  productService.getAllProducts().then(function(response) {
    $scope.products = response.data;
    console.log(response.data)
  })

  $scope.addToCart = function(id){
    cartService.addToCart(id).then(function(resp){
      console.log(resp)
    })
  }
  $scope.removeFromCart = function(id) {
    cartService.removeFromCart(id).then(function(resp){
      console.log(resp)
    })
  }

}])
