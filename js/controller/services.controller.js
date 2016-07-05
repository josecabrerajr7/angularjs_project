(function() {
    
	'use strict'

	angular
    	.module('app')
    	.controller('ServicesController', ServicesController);

        // now going to connect to the factory to get the data in the controller
        ServicesController.$inject = ['dataService'];

    /**
     * @name ServicesController
     * @desc Services page info
     **/
	function ServicesController(dataService) {
		var vm = this;
        vm.services = [];

        activate();

        function activate() {
            return getServices().then(function() {
                console.log('activate services view');
            });
        }

        function getServices() {
            return dataService.getServices()
                .then(function(data) {
                    vm.services = data;
                    return vm.services;
                });
        }
	}
})();
