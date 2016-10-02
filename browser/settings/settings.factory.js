angular.module('settingsService', function($http) {

	return {
		fetchAll: function() {
			return $http.get('/api/groups');
		}
	}

})