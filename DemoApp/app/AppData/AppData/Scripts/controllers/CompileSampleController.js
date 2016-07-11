'use strict';

eventsApp.controller('CompileSampleController',
	function CompileSampleController($scope, $compile, $parse) {
		$scope.appendDivToElement = function (markup) {
			return $compile(markup)($scope).appendTo(angular.element("#aqui"));
		}

		// uso del servicio parse
		var fn = $parse('2+2');
		console.log(fn());

		var getter = $parse('event.name');
		var context1 = { event: { name: 'Angular JS bootcamp' } };
		var context2 = { event: { name: 'Code camp' } };

		console.log(getter(context1));
		console.log(getter(context2));
		// context1 sobreescribe contex2
		console.log(getter(context2, context1));

		var setter = getter.assign;
		setter(context2, 'Code retreat');
		console.log(context2.event.name);
	}
);