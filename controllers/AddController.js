window.AddController = function ($scope, $http, $location) {
  let api = "http://localhost:8080/products";
  $scope.kiemtradulieu = {
    name: true,
    price: true,
    categoryName: true,
    error: true,
  };
  $scope.product = {};
  $scope.add = function () {
    if ($scope.product.name == undefined) {
      $scope.kiemtradulieu.name = false;
    } else {
      $scope.kiemtradulieu.name = true;
    }
    if ($scope.product.price == undefined) {
      $scope.kiemtradulieu.price = false;
      $scope.loiGia = "Giá không được để trống";
    } else if ($scope.product.price <= 100) {
      $scope.kiemtradulieu.price = false;
      $scope.loiGia = "Giá phải lớn hơn 100";
    } else {
      $scope.kiemtradulieu.price = true;
    }
    if ($scope.product.categoryName == undefined) {
      $scope.kiemtradulieu.categoryName = false;
    } else {
      $scope.kiemtradulieu.categoryName = true;
      $scope.kiemtradulieu.error = false;
    }
    if (
      $scope.kiemtradulieu.name &&
      $scope.kiemtradulieu.price &&
      $scope.kiemtradulieu.categoryName
    ) {
      // them san pham vao api
      $http.post(api, $scope.product).then(function (response) {
        alert("Thêm thành công");
        $location.path("/");
      });
    }
  };
};
