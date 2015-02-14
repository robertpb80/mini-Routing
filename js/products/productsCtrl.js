var app = angular.module("routingApp");

app.controller("productsCtrl", function($scope, $routeParams, productsService) {
	if ($routeParams.id === "shoes") {
		$scope.productData = productsService.shoeData;
	} if ($routeParams.id === "socks") {
		$scope.productData = productsService.sockData;
	}
})