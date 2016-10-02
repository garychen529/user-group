angular.module('app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/templates/home.html'
			})
			.state('login', {
				url: '/login',
				templateUrl: '/templates/login.html',
				controller: function($scope, AuthService, $state) {
					$scope.login = function() {
						AuthService.login($scope.credentials)
						.then(function() {
							$state.go('home');
						});
					};			
				}
			})
			.state('settings', {
				url: '/settings',
				templateUrl: '/templates/settings.html',
				controller: 'settingsCtrl'
			})
	});