(function() {
	'use strict'

	angular
		.module('app')
		// calling factory to get data from the json file
		.factory('dataService', dataService);

		// injecting $http and logger
		dataService.$inject = ['$http'];

		function dataService($http) {

			return {
				getServices: getServices
			};
			
			// going to get the data from the json file
			function getServices() {
				return $http.get('js/data/services.json')
					// if getting data was success it will run this
					.then(getServicesComplete)
					// if data was a failure it well throw and error 
					.catch(getServicesFailed);


				function getServicesComplete(response) {
					return response.data;
				}

				function getServicesFailed(error) {
					console.log('XHR Failed for getServices.' + error.data);
				}
			}
		}


})();