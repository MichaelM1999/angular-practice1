app.controller("MainController", ['$scope', function ($scope) {
    $scope.list = ["Clean", "go to the store", "study angular"];
    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
    $scope.bills = [];
    $scope.addBill = function() {
        $scope.bills.push({
            name: $scope.billName,
            ammount: $scope.billAmmount
        })
    }
}])