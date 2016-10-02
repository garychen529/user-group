angular.module('settingsService', function($http) {

	var _group = {};

	return {
		fetchAll: function() {
			return $http.get('/api/groups');
		},

		updateGroup: function(group) {
			return $http.put('/api/groups', group.id)
			.then(function(result) {
				angular.copy(results.data, _group);
			});
		}
	}

})