angular.module("mainApp").controller("productCtrl", ["$scope", "productService", function($scope, productService) {
  $scope.products = productService.getAllProducts();
  console.log($scope.products);
}])
