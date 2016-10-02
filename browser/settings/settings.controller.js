angular.module('app')
	.controller('settingsCtrl', function($scope, settingsService) {
		$scope.submitSettings = function() {
			settingsService.submitSettings($scope.group);
		}
	})