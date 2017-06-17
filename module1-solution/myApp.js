(function () {
    'use strict';
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$injector = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.inputitems = "";
        $scope.checkItems = function () {
            var k = $scope.inputitems.split(",");
            for (var i = 0; i < k.length; i++) {
                if (k[i] === "" || k[i] === " ") {
                    k.splice(i, 1);
                }
            }
            if (k.length === 0) {
                $scope.message = "Please enter data first";
                $scope.myColor = { "color": "red" };
                $scope.myTextboxStyle = { "border": "2px solid red" };
                
            }
            else {
                
                if (k.length<=3) {
                    $scope.message = "Enjoy!";
                    $scope.myColor = { "color": "green" };
                    $scope.myTextboxStyle = { "border": "2px solid green" };
                }
                else{
                    $scope.message = "Too much!";
                    $scope.myColor = { "color": "green" };
                    $scope.myTextboxStyle = { "border": "2px solid green" };
                }
            }
        };
    }
})();