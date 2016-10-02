angular.module('app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/browser/templates/home.html'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'browser/templates/login.html',
				controller: 'loginCtrl'
			}).state('settings', {
				url: '/settings',
				templateUrl: '/browser/templates/settings',
				controller: 'settingsCtrl'
			})
	});