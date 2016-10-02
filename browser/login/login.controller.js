angular.module('app')
	.controller('loginCtrl', function($scope, AuthService, $state) {
		$state.user = loginService.user;

		$state.login = function() {
			AuthService.login($scope.credentials)
			.then(functio() {
				$state.go('home');
			});
		};

		$state.logout = function() {
			AuthService.logout()
			.then(function() {
				$state.go('home');
			});
		};
	});