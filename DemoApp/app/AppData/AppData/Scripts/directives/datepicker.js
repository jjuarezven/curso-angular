'use strict';

eventsApp.directive('datePicker', function (gravatarUrlBuilder) {
	return {
		restrict: 'A',
		replace: true,
		link: function (scope, element) {
			element.datepicker();
		}
	};
});