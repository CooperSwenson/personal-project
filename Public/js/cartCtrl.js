angular.module("mainApp").controller("cartCtrl", ["$scope", "cartService", "$state", function($scope, cartService, $state){
  cartService.getCart().then(function(response) {
    $scope.sessionCart = response.data;
    console.log(response)
    console.log($scope.sessionCart)
    $scope.cartTotal = 0;
      for (var i = 0; i < $scope.sessionCart.products.length; i++) {
        $scope.cartTotal += $scope.sessionCart.products[i].price
      }
  })
  $scope.removeFromCart = function(id) {
    cartService.removeFromCart(id)
    .then(function(res) {
      $state.go($state.current, {}, {reload: true})
    })
  }
}])
