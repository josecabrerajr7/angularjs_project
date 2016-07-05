(function() {
    
	'use strict'

	angular
    	.module('app')
        // creating the ContactController
    	.controller('ContactController', ContactController);
        // injecting contactService
        ContactController.$inject = ['contactService'];

    /**
     * @name ContactController
     * @desc Contact page info
     **/
	function ContactController(contactService) {
		var vm = this;
        vm.title = "Contact";
        vm.email = "suport@google.com"; 
        vm.places = "Locations:";
        vm.contacts = [];
        // activate getContacts
        activate();

        function activate() {
            // getting the getContacts function
            return getContacts().then(function() {
                console.log('activate services view');
            });
        }
        // passing the json data to vm.contacts array
        function getContacts() {
            return contactService.getContacts()
                .then(function(data) {
                    vm.contacts = data;
                    return vm.contacts;
                });
        }

	}
})();
