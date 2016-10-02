angular.module('app')
	.controller('settingsCtrl', function($scope, settingsService) {
		$scope.groups = settingsService.fetchAll();
	});