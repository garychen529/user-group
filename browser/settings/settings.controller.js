angular.module('app')
	.controller('settingsCtrl', function($scope, settingsService) {
		$scope.groups = settingsService.fetchAll();

		$scope.updateGroup = function() {
			return settingsService.updateGroup($scope.selectedGroup);
		}
	});