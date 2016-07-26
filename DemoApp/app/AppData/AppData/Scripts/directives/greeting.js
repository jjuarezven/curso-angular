'use strict';

// #region antes del código de compartir controladores entre directivas

//eventsApp.directive('greeting', function () {
//	return {
//		restrict: "E",
//		replace: true,
//		template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
//		// declaracion inline
//		//controller: function ($scope) {
//		//	$scope.sayHello = function () {
//		//		alert("Hello");
//		//	}
//		//}

//		// usando una declaracion externa
//		//controller: "GreetingController"

//		// el controller lo define un atributo en el html
//		controller: "@",
//		name: "ctrl"
//	};
//});


//// puede estar definido en un archivo aparte
//eventsApp.controller("GreetingController",
//	function GreetingController($scope) {
//		$scope.sayHello = function () {
//			alert("Hello");
//		}
//	});

// #endregion

// #region código para compartir controladores entre directivas

eventsApp.directive('greeting', function () {
	return {
		restrict: 'E',
		replace: true,
		// descomentar para ver el funcionamiento de priority
		//priority: -1,
		transclude: true,
		template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
		controller: function GreetingController($scope) {
			var greetings = ['hello'];
			$scope.sayHello = function () {
				alert(greetings.join());
			};
			this.addGreeting = function (greeting) {
				greetings.push(greeting);
			};
		}
	};
})
.directive('finnish', function () {
	return {
		restrict: 'A',
		require: '^greeting',
		// descomentar para ver el funcionamiento de priority y terminal
		//priority: -1,
		//terminal: true,
		link: function (scope, element, attrs, controller) {
			controller.addGreeting('hei');
		}
	};
})
.directive('hindi', function () {
	return {
		restrict: 'A',
		require: '^greeting',
		// descomentar para ver el funcionamiento de priority
		//priority: -2,
		link: function (scope, element, attrs, controller) {
			controller.addGreeting('namaste');
		}
	};
});

// #endregion