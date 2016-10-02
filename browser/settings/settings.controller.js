angular.module('app')
	.controller('settingsCtrl', function($scope, settingsService, AuthService, UserService, $state) {
		settingsService.fetchAll()
		.then(function(groups) {
			$scope.groups = groups;
		})

		$scope.updateGroup = function() {
			AuthService.user.groupId = $scope.selectedGroup;
			UserService.update(AuthService.user)
			.then(function() {
				return AuthService.me();
			})
			.then(function() {
				$state.go('home');
			});
		}
	});