window.HomeController = function($scope, $http , $location) {
	let api = "http://localhost:8080/products";
	$http.get(api).then(function(response) {
		$scope.products = response.data;
	});
	$scope.onEdit = function(id) {
		$location.path("/edit/" + id);
	}
	$scope.onDelete = function(id) {
		let api = "http://localhost:8080/products/" + id;
		$http.delete(api).then(function(response) {
			alert("Product Deleted Successfully");
			$location.path('/');
		});
	}
}