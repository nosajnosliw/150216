//setter
//angular.module("app", []); Your dependencies go here as you are 
//defining it for the first time.

//getter
//angular.module("app")

var app = angular.module("app", ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	});

	$routeProvider.otherwise({ redirectTo : '/login' });
});

app.controller('LoginController', function() {

});