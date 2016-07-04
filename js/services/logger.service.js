(function() {
	'use strict'

	angular
		.module('app')
		// calling factory to get data from the json file
		.factory('dataService', dataService);

		// injecting $http and logger
		dataService.$inject = ['$http', 'logger'];

		function dataService($http, logger) {
			// going to get the data from the json file
			return $http.get('js/data/services.json')
				// if getting data was success it will run this
				.then(getServicesComplete)
				// if getting data fails then returns errors
				.catch(getServicesFailed);

				function getServicesComplete(response) {
					return response.data.results;
				}

				function getServicesFailed(error) {
					logger.error('XHR Failed for getServices.' + error.data);
				}
		}


})();