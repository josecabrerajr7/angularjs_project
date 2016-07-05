(function() {

	'use strict'
	
	angular
	    .module('app')
	    .controller('MainController', MainController);

	 /**
     * @name MainController
     * @desc Home page info
     **/
	function MainController() {
		var vm = this;
		vm.image = "computer-icon.png";
		vm.header = "Marketing stuff!";
		vm.caption = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.";
		vm.section = [
			{title: "Safari bug warning!", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui." },
			{title: "Heading", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui." },
			{title: "Heading", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui." }
		];		
	}
})();