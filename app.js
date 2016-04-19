 var $routeProviderReference;
 var app = angular.module('cdg', [require('angular-route'),'angularUtils.directives.dirPagination']);
 var basel = require('basel-cli');
 var routes = basel.routes();

 app.config(['$routeProvider', function($routeProvider) {
 	$routeProviderReference = $routeProvider;
 }]);

 app.run(['$rootScope', '$http', '$route', function($rootScope, $http, $route) {
    //getting routes
    angular.forEach(routes, function (route) {
    	$routeProviderReference.when( route.when, route.data );
    });

    /** 
    *	For new routes:
    *	$routeProviderReference.when('/when',{
	*		controller: 'yourController',
	*		templateUrl: 'your-view.html'
    *   })
    *
    */


    $routeProviderReference.otherwise({ redirectTo: '/' });
    $route.reload();
}]);