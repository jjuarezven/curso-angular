'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route){
		$scope.snippet = '<span style="color:red">HI THERE</span>';
		$scope.boolValue = true;
		$scope.buttonDisabled = true;
		$scope.myStyle = {color:'red'};
		$scope.sortOrder = 'name';
		//$scope.event = eventData.event;
		
		// usando callback
		/*eventData.getEvent(function(event){
			$scope.event = event;
		});*/
		
		// usando $http promises
		/*eventData.getEvent()
		.success(function(event){ $scope.event = event; })
		.error(function(data, status, headers, config){
				$log.warn(data, status, headers(), config);
			});*/
		
		// usando $resource
		//$scope.event = eventData.getEvent();
		//eventData.getEvent($routeParams.eventId)
		//	.$promise
		//	.then(function(event) {$scope.event = event;})
		//	.catch(function(response) {console.log(response);});
		
		// usando $resolve properties
		$scope.event = $route.current.locals.event;
		
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function(session){
			if(session.upVoteCount > 0){
				session.upVoteCount--;
			}
		};
		
		$scope.switchBoolValue = function(){
			$scope.boolValue = !$scope.boolValue;
			$scope.buttonDisabled = $scope.boolValue;
		};
		
		$scope.scrollToSession = function () {
			$anchorScroll();
		};

		// accediendo a propiedades personalizadas mediante el servicio $route
		console.log($route.current.foo);

		// accediendo a valores de parametros mediante el servicio $route, usando el query string (?foo=valor)
		console.log($route.current.params.eventId);
		console.log($route.current.params.foo);

		$scope.Reload = function () {
			$route.reload();
		};
	}
);