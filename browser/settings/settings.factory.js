angular.module('app')
	.factory('settingsService', function($http) {
		return {
			fetchAll: function() {
				return $http.get('/api/groups')
				.then(function(results) {
					return results.data;
				})
			},
			updateGroup: function(group) {
				return $http.put('/api/groups', group.id)
				.then(function(result) {
					angular.copy(result.data, _group);
				});
			}
		}
})