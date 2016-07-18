'use strict';

eventsApp.directive('mySample', function ($compile) {
	// usando la directiva como clase
	return {
		restrict: "C",
		// si la directiva solo renderizará html se puede usar template en lugar de link: function (scope, element, attrs, controller)....
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
		scope: {}
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