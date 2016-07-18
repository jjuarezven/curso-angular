'use strict';

eventsApp.directive('upvote', function () {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/templates/directives/upvote.html",
		// de esta manera eliminamos cualquier referencia al objeto session o al scope del parent
		scope: {
			upvote: "&",
			downvote: "&",
			count: "="
		}
	};
});