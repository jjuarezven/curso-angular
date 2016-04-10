'use strict';

eventsApp.controller('LocalSampleController',
	function CacheSampleController($scope, $locale) {
		$scope.myDate = Date.now();
		$scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
	}
);