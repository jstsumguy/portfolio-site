var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider.when('/', {
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
	$scope.message = "This is the main controller";
})

app.controller('HomeController', function($scope) {

})
app.controller('AboutController', function($scope) {
	// Controller logic goes here
})
app.controller('WorkController', function($scope) {
	// Controller logic goes here
})
app.controller('ContactController', function($scope) {
	// Controller logic goes here
})