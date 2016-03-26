'use strict';

eventsApp.factory('eventData', function($http, $log){
	return {
		getEvent: function(successcb) {			
			$http({method: 'GET', url: '/data/event/2'})
			.success(function(data, status, headers, config){
				debugger;
				successcb(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data, status, headers(), config);
			})
		}
	};
});