(function() {
    
	'use strict'

	angular
    	.module('app')
    	.controller('ServicesController', ServicesController);

        // now going to connect to the factory to get the data in the controller
        ServicesController.$inject = ['dataService', 'logger'];

    /**
     * @name ServicesController
     * @desc Services page info
     **/
	function ServicesController(dataService, logger) {
		var vm = this;
        vm.offers = [];

        vm.dataService = dataService;

        activate();

        function activate() {
            return getServices().then(function() {
                logger.info('Activated Services View');
            });
        }

        function getServices() {
            return dataService.getServices()
                .then(function(data) {
                    vm.offers = data;
                    return vm.offers;
                });
        }
	}
})();
