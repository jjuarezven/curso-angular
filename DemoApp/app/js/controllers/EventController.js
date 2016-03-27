'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log){
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
		eventData.getEvent()
			.$promise
			.then(function(event) {$scope.event = event;})
			.catch(function(response) {console.log(response);});
		
		
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
	}
);