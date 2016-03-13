'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.snippet = '<span style="color:red">HI THERE</span>';
		$scope.boolValue = true;
		$scope.buttonDisabled = true;
		$scope.myStyle = {color:'red'};
		$scope.sortOrder = 'name';
		$scope.event = {
			name: 'Angular Boot Camp',
			date: 1288323623006,
			time: '10:30 am',
			location:{
				address: "Carrera 37, #39B sur 1 - 401",
				city: "Envigado",
				province: "Antioquia"
			},
			imageUrl: '../../demoapp/app/img/angularjs-logo.png',
			sessions:[
				{
					name: 'Directives masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hour',
					level: 'Advanced',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptas rerum molestiae quidem molestias corporis dignissimos sed nam eligendi dolorem adipisci doloremque veritatis enim consequatur fugiat. Nesciunt, molestias aliquid sapiente.'
					,upVoteCount: 0
				},
					{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: '30 minutes',
					level: 'Introductory',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptas rerum molestiae quidem molestias corporis dignissimos sed nam eligendi dolorem adipisci doloremque veritatis enim consequatur fugiat. Nesciunt, molestias aliquid sapiente.'
					,upVoteCount: 0
				},
				{
					name: 'Well behaved controllers',
					creatorName: 'Jane Doe',
					duration: '2 houra',
					level: 'Intermediate',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptas rerum molestiae quidem molestias corporis dignissimos sed nam eligendi dolorem adipisci doloremque veritatis enim consequatur fugiat. Nesciunt, molestias aliquid sapiente.'
					,upVoteCount: 0
				}
			]
		}
		
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