app.controller("MainController", ['$scope', function ($scope) {
    $scope.list = ["Clean", "go to the store", "study angular"];\
    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
}])