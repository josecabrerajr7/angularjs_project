(function() {
	'use strict'

	angular.module('app')
	// using factory to get json data 
	.factory('contactService', contactService);

	contactService.$inject = ['$http'];

	function contactService($http) {
		return {
			getContacts: getContacts
		};

		// getting json data
		function getContacts() {
			return $http.get('js/data/contact.json')
			.then(getContactsComplete)
			.catch(getContactsFailed);
			// getting the data from contact.json
			function getContactsComplete(response) {
				return response.data;
			}

			function getContactsFailed(error) {
				// if failed it will catch and output and error in console.log
				console.log('XHR Failed for getContacts.' + error.data);
			}
		}
	}





})();