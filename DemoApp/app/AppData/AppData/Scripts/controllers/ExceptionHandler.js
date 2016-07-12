'use strict';

/*estamos usando el signo de dolar ($exceptionHandler) para nombrar nuestro controlador porque queremos reescribir el comportamiento normal del servicio de angular*/
eventsApp.controller('$exceptionHandler', function () {
	return function (exception) {
		console.log("exception handled: " + exception.message);
	}
});