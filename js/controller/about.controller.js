(function() {

	'use strict'
	
	angular
	    .module('app')
	    .controller('AboutController', AboutController);

	 /**
     * @name AboutController
     * @desc About page info
     **/
	function AboutController() {
		var vm = this;

		vm.title = "About";
		vm.description = "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.";
	}
})();