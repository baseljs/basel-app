"use strict";
app.controller("mainController", function($scope, $location){
	$scope.app = basel.config;
	$scope.menus = basel.menu();
});