'use strict';

eventsApp.controller('TimeoutSampleController',
	function CacheSampleController($scope, $timeout) {

		
		var promise = $timeout(function () {
			$scope.name = 'Jose Juarez';
		}, 3000);

		// el servicio $timeout es necesario para que la funcion setTimeout este dentro del contexto de angular, si ponemos aejecutar la funcion de abajo
		// vemos que el nombre no aparece despues de los 3 segundos porque setTimeout se ejecuta en otro thread diferente al de angular, vemos que se 
		// acomoda cuando se reevaluan los bindings al escribir en la caja de texto.
		//setTimeout(function () {
		//	$scope.name = 'Jose Juarez';
		//}, 3000);

		$scope.cancel = function () {
			$timeout.cancel(promise);
		}
	}
);