'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2016',
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
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: '30 minutes',
					level: 'Introductory',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptas rerum molestiae quidem molestias corporis dignissimos sed nam eligendi dolorem adipisci doloremque veritatis enim consequatur fugiat. Nesciunt, molestias aliquid sapiente.'
				},
				{
					name: 'Well behaved controllers',
					creatorName: 'Jane Doe',
					duration: '2 houra',
					level: 'Intermediate',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptas rerum molestiae quidem molestias corporis dignissimos sed nam eligendi dolorem adipisci doloremque veritatis enim consequatur fugiat. Nesciunt, molestias aliquid sapiente.'
				}
			]
		}
	}
);