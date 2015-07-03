var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		name: 'Home',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController',
	})
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		contact: 'ContactController',
	})
	.when('/work', {
		templateUrl: 'templates/work.html',
		contact: 'WorkController',
	})
})

app.controller('MainController', function($scope) {
})
app.controller('HomeController', function($scope) {
})
app.controller('AboutController', function($scope) {
})
app.controller('WorkController', function($scope) {
})
app.controller('ContactController', function($scope) {
})