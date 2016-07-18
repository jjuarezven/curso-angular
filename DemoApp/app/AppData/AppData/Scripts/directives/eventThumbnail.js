'use strict';

eventsApp.directive('eventThumbnail', function ($compile) {
	// usando la directiva como clase
	return {
		restrict: "E",
		replace: true,
		// si la directiva solo renderizará html se puede usar template en lugar de link: function (scope, element, attrs, controller)....
		templateUrl: "/templates/directives/eventThumbnail.html"
	};

	// usando la directiva como atributo
	//return {
	//	link: function (scope, element, attrs, controller) {
	//		var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
	//		angular.element(element).html($compile(markup) (scope));
	//	}

	// usando la directiva como elemento
	//return {
	//	restrict: "E",
	//	// si la directiva solo renderizará html
	//	template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
	//};

	//link: function (scope, element, attrs, controller) {
	//	var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
	//	angular.element(element).html($compile(markup)(scope));
	//}

});