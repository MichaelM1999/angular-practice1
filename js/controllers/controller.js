app.controller("MainController", ['$scope', function ($scope) {
    // to-do logic
    $scope.list = ["Clean", "go to the store", "study angular"];
    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
    // bills logic
    $scope.bills = [{
        name:"food",
        ammount:"$20"
    },
    {
        name:"car payment",
        ammount:"$280"
    },
    {
        name:"insurance",
        ammount:"$200"
    }];
    $scope.addBill = function() {
        $scope.bills.push({
            name: $scope.billName,
            ammount: $scope.billAmmount
        })
    }
}])