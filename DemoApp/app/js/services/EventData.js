'use strict';

// usando una funcion callback
/*eventsApp.factory('eventData', function($http, $log){
	return {
		getEvent: function(successcb) {			
			$http({method: 'GET', url: '/data/event/2'})
			.success(function(data, status, headers, config){
				successcb(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data, status, headers(), config);
			})
		}
	};
});*/

// usando $http promise
/*eventsApp.factory('eventData', function($http){
	return {
		getEvent: function() {			
			return $http({method: 'GET', url: '/data/event/2'});			
		}
	};
});*/

// usando $resource (se asume que el servicio es en formato REST)
eventsApp.factory('eventData', function($resource){
	return {
		getEvent: function() {			
			return $resource('/data/event/:id', {id:'@id'}).get({id:2});			
		}
	};
});