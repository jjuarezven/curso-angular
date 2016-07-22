﻿'use strict';

eventsApp.directive('collapsible', function () {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: "<div><h4 class='well-title' ng-click='toggleVisibility()'>{{title}}</h4><div ng-show='visible' ng-transclude></div></div>",
		scope: {
			title: "@"
		},
		controller: function ($scope) {
			$scope.visible = false;
			$scope.toggleVisibility = function () {
				$scope.visible = !$scope.visible;
			}
		} 
	};
});