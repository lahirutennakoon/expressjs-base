/**
 * Created by IT15010322 on 4/25/2017.
 */

angular.module('DriverApp').controller("MainController", ["$scope", function ($scope) {
    $scope.count=0;

    $scope.increase=function ()
    {
        $scope.count++;
    }

    //q15
    $scope.drivers = [{
        firstName: 'John',
        lastName: 'Smith',
        birthday: '2000-10-01',
        vehicle: 'Nissan-GTR',
        ranking: 1
    }, {
        firstName: 'Mike',
        lastName: 'Black',
        birthday: '2002-06-12',
        vehicle: 'Merc SLK 500',
        ranking: 2
    }];

    //q17
    $scope.addDriver=function (driver)
    {
        $scope.drivers.push(driver);
    }

}]);