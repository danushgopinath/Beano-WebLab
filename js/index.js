var app = angular.module('navbar', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'home.html' })
        .when('/calculator', { templateUrl: 'calculator.html' })
        .when('/todo', { templateUrl: 'todo.html' })
        .when('/exercise6', { templateUrl: 'exercise6.html' })
        .when('/filter', { templateUrl: 'filter.html' })
        .when('/feedback', { templateUrl: 'texteditor.html' })
        .when('/media', { templateUrl: 'videoeditor.html' })
        .when('/personal', { templateUrl: 'personal.html' })
}
]);

app.controller('homeCtrl', function ($scope) {
    $scope.text = "Danush G";
});

app.controller('calculatorCtrl', function ($scope) {
    $scope.calculate = function () {
        switch ($scope.operator) {
            case '+':
                $scope.result = $scope.num1 + $scope.num2;
                break;
            case '-':
                $scope.result = $scope.num1 - $scope.num2;
                break;
            case '*':
                $scope.result = $scope.num1 * $scope.num2;
                break;
            case '/':
                $scope.result = $scope.num1 / $scope.num2;
                break;
        }
    }
});

app.controller('todoCtrl', function ($scope) {
    $scope.todoList = [];
    $scope.todoAdd = function () {
        $scope.todoList.push($scope.pinput)
        $scope.pinput = "";
    }

    $scope.doneList = [];
    $scope.todoRemove = function () {
        $scope.doneList.push($scope.cinput)
        $scope.cinput = "";
    }
});

app.controller('layoutCtrl', function ($scope) {
    $scope.listVisible = true;
    $scope.blockVisible = false;

    $scope.list = function () {
        console.log("List Clicked");
        $scope.listVisible = $scope.listVisible = true;
        $scope.blockVisible = $scope.blockVisible = false;
    }

    $scope.block = function () {
        console.log("Block Clicked")
        $scope.listVisible = $scope.listVisible = false;
        $scope.blockVisible = $scope.blockVisible = true;
    }
});

app.controller('customerController', function ($scope) {
    $scope.customer = {
        firstName: "Danush",
        lastName: "Gopinath",
        fees: 2430,
        events: [
            { name: 'Music Festival', amt: 1700 },
            { name: 'Art Exhibition', amt: 80 },
            { name: 'Movie Night', amt: 650 }
        ],
        fullName: function () {
            var customerObject;
            customerObject = $scope.customer;
            return customerObject.firstName + " " + customerObject.lastName;
        }
    };
});

app.controller('textCtrl', function ($scope) {
    $scope.newIsVisible = false;
    $scope.loadIsVisible = false;
    $scope.isVisible = false;

    $scope.newFile = function () {
        console.log("New File Button Clicked");
        $scope.content = "";
        $scope.filename = "";
        $scope.newIsVisible = $scope.newIsVisible = true;
        $scope.loadIsVisible = $scope.loadIsVisible = false;
        $scope.isVisible = $scope.isVisible = true;
        $scope.message = "";
    }


    $scope.loadFile = function () {
        $scope.loadFile = function () {
            var input = document.getElementById("fileInput");
            var file = input.files[0];
            var reader = new FileReader();
            reader.onload = function () {
                $scope.$apply(function () {
                    $scope.content = reader.result;
                });
            };
            reader.readAsText(file);
        };
        $scope.loadIsVisible = $scope.loadIsVisible = true;
        $scope.newIsVisible = $scope.newIsVisible = false;
        $scope.isVisible = $scope.isVisible = true
        $scope.message = "";
    }

    $scope.saveFile = function () {
        const text = $scope.content;
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = $scope.filename;
        a.click();
    }

    $scope.cutFile = function () {
        console.log("Cut File Button Clicked");
        $scope.content = "";
    }

    $scope.copyFile = function () {
        $scope.content = "I didn't do the copy and paste part."
        $scope.isVisible = $scope.isVisible = true
    }

    $scope.pasteFile = function () {
        $scope.content = "I didn't do the copy and paste part."
        $scope.isVisible = $scope.isVisible = true
    }

    $scope.exitFile = function () {
        $scope.loadIsVisible = $scope.loadIsVisible = false;
        $scope.newIsVisible = $scope.newIsVisible = false;
        $scope.isVisible = $scope.isVisible = false;
        $scope.message = "Thanks for submitting your feedback"
    }
});

app.controller('videoCtrl', function ($scope) {
    var video = document.getElementById('myVideo');
    $scope.videoUrl = "../assets/Video.mp4"
    $scope.play = function () {
        if (video.paused) {
            video.play();
        }
    }

    $scope.pause = function () {
        if (video.play) {
            video.pause();
        }
    }

    $scope.restart = function () {
        video.currentTime = 0;
        video.play();
    }

    $scope.minus = function () {
        video.currentTime = video.currentTime - 20;
        video.play();
    }

    $scope.add = function () {
        video.currentTime = video.currentTime + 20;
        video.play();
    }

    $scope.mute = function () {
        $scope.muted = !$scope.muted;
        video.muted = $scope.muted;
    }
});

function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var mobileRegex = /^[0-9]{10}$/;

    if (name === "") {
        document.getElementById("nameError").style.display = "block";
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (mobile === "") {
        document.getElementById("mobileError").style.display = "block";
        document.getElementById("mobilePatternError").style.display = "none";
    } else if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").style.display = "none";
        document.getElementById("mobilePatternError").style.display = "block";
    } else {
        document.getElementById("mobileError").style.display = "none";
        document.getElementById("mobilePatternError").style.display = "none";
    }

    if (name !== "" && mobile !== "" && mobileRegex.test(mobile)) {
        document.getElementById("cardForm").submit();
    }
}