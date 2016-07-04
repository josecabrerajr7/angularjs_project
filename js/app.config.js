angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		// this will default to this route if there is no other page
		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state("home", {
				url: "/welcome",
				templateUrl: "views/main.html",
				controller: "MainController"
			})
			.state("/about", {
				url: "/about",
				templateUrl: "views/about.html",
				controller: "AboutController"
			})
			.state("/services", {
				url: "/services",
				templateUrl: "views/services.html",
				controller: "ServicesController"
			})
			.state("/contact", {
				url: "/contact",
				templateUrl: "views/contact.html",
				controller: "ContactController"
			})
	});