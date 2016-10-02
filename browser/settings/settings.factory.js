angular.module('settingsService', function($http) {

	return {
		fetchAll: function() {
			return $http.get('/api/groups');
		},

		changeGroup: function(user, group) {
			return $http.put('/api/users/' + user.id + '/group', group)
		}
	}

})