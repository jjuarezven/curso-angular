'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData){
		$scope.snippet = '<span style="color:red">HI THERE</span>';
		$scope.boolValue = true;
		$scope.buttonDisabled = true;
		$scope.myStyle = {color:'red'};
		$scope.sortOrder = 'name';
		$scope.event = eventData.event;
		
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