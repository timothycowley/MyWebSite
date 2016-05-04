var homeApp = angular.module('homeApp', ['ngRoute']);

homeApp.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {
		//	controller: 'mainController',
			templateUrl: 'partials/home.html'
		})
		.when('/aboutme_personal',  {
		//	controller: 'mainController',
			templateUrl: 'partials/aboutme_personal.html'
		})
		.when('/aboutme_professional', {
		//	controller: 'mainController',
					templateUrl: 'partials/aboutme_professional.html'
		})
		.when('/medicare', {
		//	controller: 'mainController',
			templateUrl: 'partials/medicare.html'
		})
		.otherwise({
			redirectTo: '/'
		});	
});
// homeApp.controller('mainController', function($scope, $templateCache) {
// 	$scope.message="controller works";
// })
