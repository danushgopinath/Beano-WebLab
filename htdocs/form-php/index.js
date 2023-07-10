var app = angular.module("form", []);

app.controller("FormCtrl", function($scope){
    $scope.formData = {}
    
    $scope.formSubmit = function() {
        if ($scope.myForm.$valid) {
        }
        else {
            alert("Please fill all the required fields.");
        }
    };
});