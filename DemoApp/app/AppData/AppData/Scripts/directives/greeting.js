'use strict';

eventsApp.directive('greeting', function () {
	return {
		restrict: "E",
		replace: true,
		template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
		// declaracion inline
		//controller: function ($scope) {
		//	$scope.sayHello = function () {
		//		alert("Hello");
		//	}
		//}

		// usando una declaracion externa
		//controller: "GreetingController"

		// el controller lo define un atributo en el html
		controller: "@",
		name: "ctrl"
	};
});


// puede estar definido en un archivo aparte
eventsApp.controller("GreetingController",
	function GreetingController($scope) {
		$scope.sayHello = function () {
			alert("Hello");
		}
	});